import React, { useEffect, useState } from "react";
import { useCrypto } from "../context/CryptoContext";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chartDays } from "../config/data";
import Button from "./Button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const { currency, symbol } = useCrypto();

  const id = coin?.id;

  const fetchHistoricData = async () => {
    try {
      const { data } = await axios.get(HistoricalChart(id, days, currency));
      setHistoricData(data.prices);
    } catch (error) {
      console.log("Error fetching historic coins", error);
    }
  };

  useEffect(() => {
    fetchHistoricData();
  }, [currency, days]);

  console.log("historicData", historicData);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
          padding: 40,
        }}
      >
        {historicData.length ===0 ? (
          <CircularProgress
            style={{
              color: "gold",
            }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              key={days} // Add this line to force re-rendering when days change
              data={{
                labels: historicData?.map((coin) => {
                  let date = new Date(coin[0]);
                  console.log('date', date)
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;

                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    label: `Price (Past ${days} Days) in ${currency}`,
                    data: historicData?.map((coin) => coin[1]),
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                direction: "flex",
                justifyContent: "space-around",
                width: "100%",
                marginTop: 20,
              }}
            >
              {chartDays?.map((day) => (
                <Button
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
