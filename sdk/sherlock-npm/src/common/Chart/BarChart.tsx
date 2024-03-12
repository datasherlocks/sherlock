import React, { useState, useEffect } from "react";
import * as Form from "@radix-ui/react-form";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
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
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  FormField,
  SelectItem,
  SelectTrigger,
  SelectPortal,
  SelectScrollUpButton,
  SelectItemIndicator,
  SelectScrollDownButton,
} from "./styles";

const ChartTypes = {
  BAR: "bar",
  PIE: "pie",
  LINE: "line",
};

const getRandomColor = () => {
  const randomColor = () => Math.floor(Math.random() * 256);
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  return `rgba(${r}, ${g}, ${b}, 0.2)`;
};

const BarChart = ({ dataset }) => {
  const [selectedXAxis, setSelectedXAxis] = useState("");
  const [selectedYAxis, setSelectedYAxis] = useState("");
  const [chart, setSelectedChart] = useState(ChartTypes.BAR);

  const xDataKey =
    selectedXAxis || (dataset.length > 0 ? Object.keys(dataset[0])[0] : "");
  const yDataKey =
    selectedYAxis || (dataset.length > 0 ? Object.keys(dataset[0])[1] : "");
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

  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        label: selectedYAxis,
        data: dataset.map((obj) => obj[yDataKey]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(99, 102, 241)",
      },
    ],
  });

  const [options, setOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Reports",
      },
    },
  });

  const handleChangeXAxis = (event) => {
    setSelectedXAxis(event);
  };

  const handleChangeYAxis = (event) => {
    setSelectedYAxis(event);
  };

  const handleChangeChart = (event) => {
    setSelectedChart(event);
  };

  const updateChartData = () => {
    const backgroundColor = Array.from({ length: dataset.length }, () =>
      getRandomColor(),
    );
    const borderColor = backgroundColor.map((color) =>
      color.replace(/[^,]+(?=\))/, "1"),
    );
    labels = dataset.map((obj) => obj[xDataKey]);
    setChartData({
      labels,
      datasets: [
        {
          label: selectedYAxis,
          data: dataset.map((obj) => obj[yDataKey]),
          borderColor:
            ChartTypes.PIE !== chart ? "rgb(99, 102, 241)" : borderColor,
          backgroundColor:
            ChartTypes.PIE !== chart ? "rgb(99, 102, 241)" : backgroundColor,
        },
      ],
    });

    setOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Reports",
        },
      },
    });
  };

  useEffect(() => {
    updateChartData();
  }, []);

  useEffect(() => {
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

  return (
    <div>
      <div>
        <Form.Root>
          <div style={{ display: "flex" }}>
            <FormField name="chart">
              <div>
                <Form.Label>Select Chart Type</Form.Label>
              </div>
              <Select.Root onValueChange={handleChangeChart}>
                <SelectTrigger aria-label="chart">
                  <Select.Value placeholder="Select Chart Type" />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </SelectTrigger>
                <SelectPortal>
                  <Select.Content>
                    <SelectScrollUpButton>
                      <ChevronUpIcon />
                    </SelectScrollUpButton>
                    <Select.Viewport>
                      <Select.Group>
                        <SelectItem value={ChartTypes.BAR}>
                          <Select.ItemText>{ChartTypes.BAR}</Select.ItemText>
                          <SelectItemIndicator>
                            <CheckIcon />
                          </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value={ChartTypes.LINE}>
                          <Select.ItemText>{ChartTypes.LINE}</Select.ItemText>
                          <SelectItemIndicator>
                            <CheckIcon />
                          </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value={ChartTypes.PIE}>
                          <Select.ItemText>{ChartTypes.PIE}</Select.ItemText>
                          <SelectItemIndicator>
                            <CheckIcon />
                          </SelectItemIndicator>
                        </SelectItem>
                      </Select.Group>
                    </Select.Viewport>
                    <SelectScrollDownButton>
                      <ChevronDownIcon />
                    </SelectScrollDownButton>
                  </Select.Content>
                </SelectPortal>
              </Select.Root>
            </FormField>

            <FormField name="xaxis">
              <div>
                <Form.Label>X-axis</Form.Label>
              </div>
              <Select.Root onValueChange={handleChangeXAxis}>
                <SelectTrigger aria-label="xasis">
                  <Select.Value placeholder="Select X Axis" />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </SelectTrigger>
                <SelectPortal>
                  <Select.Content>
                    <SelectScrollUpButton>
                      <ChevronUpIcon />
                    </SelectScrollUpButton>
                    <Select.Viewport>
                      <Select.Group>
                        {dataset.length > 0 &&
                          Object.keys(dataset[0]).map((key) => (
                            <SelectItem value={key} key={key}>
                              <Select.ItemText>{key}</Select.ItemText>
                              <SelectItemIndicator>
                                <CheckIcon />
                              </SelectItemIndicator>
                            </SelectItem>
                          ))}
                      </Select.Group>
                    </Select.Viewport>
                    <SelectScrollDownButton>
                      <ChevronDownIcon />
                    </SelectScrollDownButton>
                  </Select.Content>
                </SelectPortal>
              </Select.Root>
            </FormField>

            <FormField name="yaxis">
              <div>
                <Form.Label>Y-axis</Form.Label>
              </div>
              <Select.Root onValueChange={handleChangeYAxis}>
                <SelectTrigger aria-label="yaxis">
                  <Select.Value placeholder="Select Y Axis" />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </SelectTrigger>
                <SelectPortal>
                  <Select.Content>
                    <SelectScrollUpButton>
                      <ChevronUpIcon />
                    </SelectScrollUpButton>
                    <Select.Viewport>
                      <Select.Group>
                        {dataset.length > 0 &&
                          Object.keys(dataset[0]).map((key) => (
                            <SelectItem value={key} key={key}>
                              <Select.ItemText>{key}</Select.ItemText>
                              <SelectItemIndicator>
                                <CheckIcon />
                              </SelectItemIndicator>
                            </SelectItem>
                          ))}
                      </Select.Group>
                    </Select.Viewport>
                    <SelectScrollDownButton>
                      <ChevronDownIcon />
                    </SelectScrollDownButton>
                  </Select.Content>
                </SelectPortal>
              </Select.Root>
            </FormField>
          </div>
        </Form.Root>
      </div>
      <div>{renderChart()}</div>
    </div>
  );
};

export default BarChart;
