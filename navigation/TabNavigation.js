import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs"
import MovieScreen from '../screens/Movie';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/Search';
import { BG_COLOR, WHITE } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";

const TabNavigation = createBottomTabNavigator(
    {
        Movie: {
            screen: MovieScreen,
            navigationOptions:{
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-film" : "md-film"}/>
                )
            }
        },
        TV: {
            screen: TVScreen,
            navigationOptions:{
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}/>
                )
            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions:{
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-search" : "md-search"}/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            style:{
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);