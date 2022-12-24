/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    ForDeliveryContainer: {
                        screens: {
                            TabOneScreen: "For Delivery",
                        },
                    },
                    MenuContainer: {
                        screens: {
                            TabTwoScreen: "Menu",
                        },
                    },
                    FlavorsContainer: {
                        screens: {
                            TabTwoScreen: "Flavors",
                        },
                    },
                    HistoryContainer: {
                        screens: {
                            TabTwoScreen: "History",
                        },
                    },
                    AccountContainer: {
                        screens: {
                            TabTwoScreen: "Account",
                        },
                    },
                },
            },
            Modal: "modal",
            NotFound: "*",
        },
    },
};

export default linking;
