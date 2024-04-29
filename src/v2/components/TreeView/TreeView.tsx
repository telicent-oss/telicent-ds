import { RichTreeView, RichTreeViewProps } from '@mui/x-tree-view/RichTreeView';
export type { TreeViewBaseItem } from '@mui/x-tree-view';
export type { RichTreeViewProps, RichTreeViewPropsBase, RichTreeViewSlots, RichTreeViewSlotProps, } from '@mui/x-tree-view/RichTreeView/RichTreeView.types';
export * from './TopExpandedTreeView';
import Collapse from '@mui/material/Collapse';
import { TransitionProps } from '@mui/material/transitions';
import { useSpring, animated } from '@react-spring/web';

function TransitionComponent(props: TransitionProps) {
    const style = useSpring({
    to: {
        opacity: props.in ? 1 : 0,
        transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
    });

    return (
    <animated.div style={style}>
        <Collapse {...props} />
    </animated.div>
    );
}

export const TreeView = <DataItem extends {}, Multiple extends boolean | undefined>(
    props: RichTreeViewProps<DataItem, Multiple>
) => {
    return (
        <RichTreeView<DataItem, Multiple>
            slotProps={{ item: { slots: { groupTransition: TransitionComponent } } }}
            {...props}
        />
    );
};