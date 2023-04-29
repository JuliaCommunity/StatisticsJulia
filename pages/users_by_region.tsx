import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
    {
        region: "Australia",
        "Users": 29000,
    },
    {
        region: "Asia",
        "Users": 152000,
    },
    {
        region: "Europe",
        "Users": 508000,
    },
    {
        region: "North America",
        "Users": 498000,
    },
    {
        region: "South America",
        "Users": 50000,
    },
];

const dataFormatter = (number: number) => {
    return Intl.NumberFormat("us").format(number).toString();
};

export default function UserCount() {
    return (
        <Card>
            <Title>Approximate Number of Users by Region</Title>
            <Subtitle>
                There are over 1.25 million users of Julia. Current number of users by region is an approximation given it associates user count to nearest Pkg Server request count.
            </Subtitle>
            <BarChart
                className="mt-6"
                data={chartdata}
                index="region"
                categories={["Users"]}
                colors={["blue"]}
                valueFormatter={dataFormatter}
                yAxisWidth={50}
            />
        </Card>
    )
};