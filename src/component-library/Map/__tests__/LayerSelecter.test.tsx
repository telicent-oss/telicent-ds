import { render, renderHook, act, fireEvent, screen, RenderHookResult } from '@testing-library/react';
import { LayerOption, useInternalState } from '../layer-selector/LayerSelector';

describe('useInternalState', () => {
  let result: RenderHookResult<ReturnType<typeof useInternalState>, void>["result"];
  let initialData: LayerOption[];
  let onChangeMock: jest.Mock;
  const fakeButton = document.createElement("button");

  const fakeEvent = {
    currentTarget: fakeButton,
  } as React.MouseEvent<HTMLButtonElement>;


  beforeEach(() => {
    initialData = [{
      label: 'Label1',
      image: 'image1',
      uri: 'http://thing1.com'
    },
    {
      label: 'Label2',
      image: 'image2',
      uri: 'http://thing2.com'
    },
    {
      label: 'Label3',
      image: 'image3',
      uri: 'http://thing3.com'
    }
    ];
    onChangeMock = jest.fn();
    result = renderHook(() =>
      useInternalState({ data: initialData, onChange: onChangeMock }),
    ).result;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('initial state is set correctly', () => {
    expect(result.current.selectedIndex).toBe(0);
    expect(result.current.anchorEl).toBeNull();
  });

  test('handles open', () => {
    act(() => {
      result.current.onClickDropdown(fakeEvent);
    });
    expect(result.current.anchorEl).toBe(fakeEvent.currentTarget);
  });

  test('handles close', () => {
    act(() => {
      result.current.onClickDropdown(fakeEvent);
      result.current.onCloseDropdown();
    });
    expect(result.current.anchorEl).toBeNull();
  });

  test('open (by click dropdown), then cycle selection (by re-clicking dropdown)', () => {
    act(() => {
      result.current.onClickDropdown(fakeEvent); // open
    });
    expect(onChangeMock).toHaveBeenCalledWith(initialData[0]);
    expect(result.current.selectedIndex).toBe(0);

    act(() => {
      result.current.onClickDropdown(fakeEvent); // re-click to cycle selection (while open)
    });
    expect(onChangeMock).toHaveBeenCalledWith(initialData[1]);
    expect(result.current.selectedIndex).toBe(1);
  });

  test('handles list item click', () => {
    act(() => {
      result.current.onListItemClick(2);
    });
    expect(result.current.selectedIndex).toBe(2);
    expect(onChangeMock).toHaveBeenCalledWith(initialData[2]);
    expect(result.current.anchorEl).toBeNull(); // should be closed after selection
  });
});

describe('LayerSelector', () => {
  const mockData = [
    { image: 'url1', label: 'Label1' },
    { image: 'url2', label: 'Label2' },
  ];
  const mockOnChange = jest.fn();
  const { LayerSelector } = require('../layer-selector/LayerSelector');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should not render if data has one or no item', () => {
    const { container } = render(<LayerSelector data={[mockData[0]]} onChange={mockOnChange} />);
    expect(container).toBeEmptyDOMElement();
  });

  test('should render and handle dropdown interactions', () => {
    const result = render(<LayerSelector data={mockData} onChange={mockOnChange} />);

    const dropdownButton = result.getByTestId('layer-selector');
    fireEvent.click(dropdownButton);
    expect(screen.getByText('Label1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Label2'));
    expect(mockOnChange).toHaveBeenCalledWith(mockData[1]);
    expect(screen.queryByText('Label1')).not.toBeVisible(); // dropdown closes on select
  });
});

describe('Presentational', () => {
  const { Presentational } = require('../layer-selector/LayerSelector');
  const mockData = [
    { image: 'url1', label: 'Label1' },
    { image: 'url2', label: 'Label2' },
  ];

  beforeAll(() => {
    const MockComponent = ({ children, ...props }: { children: React.ReactNode }) => <div data-props={props}>{children}</div>;
    jest.mock('@telicent-oss/ds', () => ({
      __esModule: true,
      Box: MockComponent,
      FlexGrid: MockComponent,
      FlexGridItem: MockComponent,
      PopOver: MockComponent,
      Button: MockComponent,
      Text: MockComponent,
      useExtendedTheme: () => ({ palette: { primary: { main: 'main' } } }),
    }));
  });
  test('renders correctly with given props', () => {
    const mockElement = document.createElement('div');
    render(
      <Presentational
        data={mockData}
        selectedIndex={1}
        anchorEl={mockElement}
        onClickDropdown={jest.fn()}
        onCloseDropdown={jest.fn()}
        onListItemClick={jest.fn()}
      />,
    );
    const image = screen.getByRole('img', { name: 'Label1' });
    expect(image).toHaveAttribute('src', 'url1');
    expect(screen.getByText('Label1')).toBeInTheDocument();
  });

  test('clicking the dropdown button invokes onClickDropdown', () => {
    const mockOnClickDropdown = jest.fn();
    render(
      <Presentational
        data={mockData}
        selectedIndex={1}
        anchorEl={null}
        onClickDropdown={mockOnClickDropdown}
        onCloseDropdown={jest.fn()}
        onListItemClick={jest.fn()}
      />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClickDropdown).toHaveBeenCalled();
  });
});
