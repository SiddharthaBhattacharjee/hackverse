
import Header from "./components/Header";
import { ConfigProvider, theme } from "antd";
import { useTheme } from "./context/useTheme";
import SponsorsCard from "./components/SponsorsCard";
import CommunityPartnerCard from './Components/CommunityPartnerCard';

const App = () => {
  const { darkMode } = useTheme();
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div className="bg-white dark:bg-black min-h-screen w-screen">
        <Header />
        <SponsorsCard />
         <CommunityPartnerCard />
      </div>
    </ConfigProvider>

  );
};

export default App;
