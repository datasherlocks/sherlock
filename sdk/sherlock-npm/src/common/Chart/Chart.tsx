import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

const ChartTypes = {
  BAR: 'bar',
  PIE: 'pie',
  LINE: 'line',
};

const getRandomColor = () => {
  const randomColor = () => Math.floor(Math.random() * 256);
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  return `rgba(${r}, ${g}, ${b}, 0.2)`;
};

const ChartComponent = (props)  => {
  const { show, dataset} = props;
  const [selectedXAxis, setSelectedXAxis] = useState('');
  const [selectedYAxis, setSelectedYAxis] = useState('');
  const [chart, setSelectedChart] = useState(ChartTypes.BAR);

  const xDataKey =
    selectedXAxis || (dataset.length > 0 ? Object.keys(dataset[0])[0] : '');
  const yDataKey =
    selectedYAxis || (dataset.length > 0 ? Object.keys(dataset[0])[1] : '');
  let labels = dataset.map((obj) => obj[xDataKey]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  );

  // Define chartData and options with correct types
  const [chartData, setChartData] = useState<any>({
    labels,
    datasets: [
      {
        label: selectedYAxis,
        data: dataset.map((obj) => obj[yDataKey]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(99, 102, 241)',
      },
    ],
  });

  const [options, setOptions] = useState<any>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Reports',
      },
    },
  });

  const handleChangeXAxis = (event: any) => {
    setSelectedXAxis(event);
  };

  const handleChangeYAxis = (event: any) => {
    setSelectedYAxis(event);
  };

  const handleChangeChart = (event: any) => {
    setSelectedChart(event);
  };

  const updateChartData = () => {
    const backgroundColor = Array.from({ length: dataset.length }, () =>
      getRandomColor(),
    );
    const borderColor = backgroundColor.map((color) =>
      color.replace(/[^,]+(?=\))/, '1'),
    ); // Set alpha to 1 for border
    labels = dataset.map((obj) => obj[xDataKey]);
    setChartData({
      labels,
      datasets: [
        {
          label: selectedYAxis,
          data: dataset.map((obj) => obj[yDataKey]),
          borderColor:
            ChartTypes.PIE !== chart ? 'rgb(99, 102, 241)' : borderColor,
          backgroundColor:
            ChartTypes.PIE !== chart ? 'rgb(99, 102, 241)' : backgroundColor,
        },
      ],
    });

    setOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Reports',
        },
      },
    });
  };

  React.useEffect(() => {
    updateChartData();
  }, []);

  React.useEffect(() => {
    updateChartData();
  }, [dataset, selectedXAxis, selectedYAxis, chart]);

  const renderChart = () => {
    switch (chart) {
      case ChartTypes.PIE:
        return (
          <Pie
            data={chartData}
            width={500}
            height={500}
            options={{ maintainAspectRatio: false }}
          />
        );
      case ChartTypes.LINE:
        return (
          <Line options={options} data={chartData} width={500} height={500} />
        );
      case ChartTypes.BAR:
      default:
        return (
          <Bar options={options} data={chartData} width={500} height={500} />
        );
    }
  };

  if (!show) return true;
  return (
    <div className="w-full">
      <div>
        <Form.Root className="flex w-full">
          <Form.Field className="mr-5 ml-5 w-1/3" name="chart">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                Select Chart Type
              </Form.Label>
            </div>
            <Select.Root onValueChange={handleChangeChart}>
              <Select.Trigger
                className="!h-12 w-full inline-flex !border !border-gray-600  items-center justify-center rounded px-[15px] text-[13px] leading-none !h-12 gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
                aria-label="chart"
              >
                <Select.Value placeholder="Select Chart Type" />
                <Select.Icon className="text-violet11">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                  <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="p-[5px]">
                    <Select.Group>
                      <Select.Item
                        value={ChartTypes.BAR}
                        className={classnames(
                          'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                        )}
                      >
                        <Select.ItemText>{ChartTypes.BAR}</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item
                        value={ChartTypes.LINE}
                        className={classnames(
                          'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                        )}
                      >
                        <Select.ItemText>{ChartTypes.LINE}</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item
                        value={ChartTypes.PIE}
                        className={classnames(
                          'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                        )}
                      >
                        <Select.ItemText>{ChartTypes.PIE}</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                  <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Form.Field>

          <Form.Field className="mr-5 ml-5 w-1/3" name="xaxis">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                X-axis
              </Form.Label>
            </div>
            <Select.Root onValueChange={handleChangeXAxis}>
              <Select.Trigger
                className="!h-12 w-full inline-flex !border !border-gray-600  items-center justify-center rounded px-[15px] text-[13px] leading-none !h-12 gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
                aria-label="xasis"
              >
                <Select.Value placeholder="Select X Axis" />
                <Select.Icon className="text-violet11">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                  <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="p-[5px]">
                    <Select.Group>
                      {dataset.length > 0 &&
                        Object.keys(dataset[0]).map((key) => (
                          <Select.Item
                            value={key}
                            key={key}
                            className={classnames(
                              'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                            )}
                          >
                            <Select.ItemText>{key}</Select.ItemText>
                            <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                    </Select.Group>
                  </Select.Viewport>
                  <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Form.Field>
          <Form.Field className="mr-5 ml-5 w-1/3" name="yaxis">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                Y-axis
              </Form.Label>
            </div>
            <Select.Root onValueChange={handleChangeYAxis}>
              <Select.Trigger
                className="!h-12 w-full inline-flex !border !border-gray-600  items-center justify-center rounded px-[15px] text-[13px] leading-none !h-12 gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
                aria-label="yaxis"
              >
                <Select.Value placeholder="Select Y Axis" />
                <Select.Icon className="text-violet11">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                  <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="p-[5px]">
                    <Select.Group>
                      {dataset.length > 0 &&
                        Object.keys(dataset[0]).map((key) => (
                          <Select.Item
                            value={key}
                            key={key}
                            className={classnames(
                              'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                            )}
                          >
                            <Select.ItemText>{key}</Select.ItemText>
                            <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                    </Select.Group>
                  </Select.Viewport>
                  <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Form.Field>
        </Form.Root>
      </div>
      <div
        className={
          'flex gap-2 mt-5  rounded border p-4 pt-10 mt-10 transition-colors dark:border-black-400'
        }
      >
        {renderChart()}
      </div>
    </div>
  );
};

export default  ChartComponent;
