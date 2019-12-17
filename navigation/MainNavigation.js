import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator(
    {
        Tabs: {screen: TabNavigation,
            navigationOptions:{
                header: null
            }
        },
        Detail: DetailScreen
    },
    {}
);

export default createAppContainer(MainNavigation);