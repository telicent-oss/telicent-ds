import { useState } from "react";
import { TreeView as TreeViewRaw, RichTreeViewProps } from "./TreeView";

type AlwaysExpanded = { alwaysExpandedIds: string[] };

export const TopExpandedTreeView = <
  DataItem extends {},
  Multiple extends boolean | undefined
>(
  props: RichTreeViewProps<DataItem, Multiple> & AlwaysExpanded
) => {
  const [expandedItems, setExpandedItems] = useState(props.alwaysExpandedIds);
  return (
      <TreeViewRaw<DataItem, Multiple>
        {...props}
        expandedItems={expandedItems}
        onExpandedItemsChange={(e, itemIds) => {
          setExpandedItems([
            ...new Set([...props.alwaysExpandedIds, ...itemIds]),
          ]);
        }}
      />
  );
};
