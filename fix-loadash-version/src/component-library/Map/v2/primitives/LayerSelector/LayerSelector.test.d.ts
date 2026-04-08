export declare class MockLayer {
    private props;
    constructor(initial?: Record<string, any>);
    get(key: string): any;
    set(key: string, val: any): void;
    setVisible: jest.Mock<any, any, any>;
}
