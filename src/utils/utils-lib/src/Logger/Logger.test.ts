import { Logger } from "./Logger";

describe("Logger", () => {
  let spyDebug: ReturnType<typeof jest.spyOn>;
  let spyInfo: ReturnType<typeof jest.spyOn>;
  let spyWarn: ReturnType<typeof jest.spyOn>;
  let spyError: ReturnType<typeof jest.spyOn>;

  beforeEach(() => {
    spyDebug = jest.spyOn(console, "debug").mockImplementation(() => {});
    spyInfo = jest.spyOn(console, "info").mockImplementation(() => {});
    spyWarn = jest.spyOn(console, "warn").mockImplementation(() => {});
    spyError = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("buffers calls before init and flushes on init with string level", () => {
    const logger = new Logger();
    logger.debug("a");
    logger.info("b");
    logger.init("debug");
    expect(spyDebug).toHaveBeenCalledWith("a");
    expect(spyInfo).toHaveBeenCalledWith("b");
  });

  it("works with numeric level initialization", () => {
    const logger = new Logger(2);
    logger.info("skip");
    logger.warn("ok");
    expect(spyInfo).not.toHaveBeenCalled();
    expect(spyWarn).toHaveBeenCalledWith("ok");
  });

  it("logs immediately after init", () => {
    const logger = new Logger("warn");
    logger.error("now");
    expect(spyError).toHaveBeenCalledWith("now");
  });
});
