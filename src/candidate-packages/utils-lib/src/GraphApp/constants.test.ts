import { GRAPH_APP } from "./constants";

test("GRAPH_APP", () => {
  expect(GRAPH_APP).toMatchInlineSnapshot(`
    {
      "QUERY_PARAM": {
        "NODES": "nodes[]",
      },
    }
  `);
});
