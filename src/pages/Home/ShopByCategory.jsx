import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryItems from "./CategoryItems";

const ShopByCategory = () => {
  const { toysAndGames, puzzleToys, developmentToys } = useLoaderData();

  return (
    <div className="container my-20 pt-8">
      <h1 className="text-center text-5xl font-extrabold mb-12 font-nunito">
        Shop by Category
      </h1>
      <Tabs>
        <TabList>
          <Tab>Toys & Games</Tab>
          <Tab>Puzzle Toys</Tab>
          <Tab>Development Toys & Kits</Tab>
        </TabList>

        <TabPanel>
          <CategoryItems items={toysAndGames} />
        </TabPanel>
        <TabPanel>
          <CategoryItems items={puzzleToys} />
        </TabPanel>
        <TabPanel>
          <CategoryItems items={developmentToys} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
