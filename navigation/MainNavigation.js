import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyleds } from "./config";

const MainNavigation = createStackNavigator(
    {
        Tabs: {screen: TabNavigation,
            navigationOptions:{
                header: null
            }
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions:{
                ...headerStyleds
            }
        }
    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
);

export default createAppContainer(MainNavigation);