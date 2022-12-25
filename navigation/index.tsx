/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Foundation } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Image, Pressable, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import ForDeliveryContainer from "../screens/forDelivery/ForDeliveryContainer";
import MenuContainer from "../screens/menu/MenuContainer";
import FlavorsContainer from "../screens/flavors/FlavorsContainer";
import HistoryContainer from "../screens/history/HistoryContainer";
import AccountContainer from "../screens/account/AccountContainer";
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import forDelivery from "../assets/images/forDelivery.png";
import menu from "../assets/images/menu.png";
import flavors from "../assets/images/flavors.png";
import history from "../assets/images/history.png";
import account from "../assets/images/account.png";
import logo from "../assets/images/logo.png";

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const headerLeft = (navigation: any) => {
    return (
        <Pressable
            onPress={() => navigation.navigate("ForDeliveryContainer")}
            style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
            })}
        >
            <Image
                source={logo}
                style={{
                    height: 40,
                    width: 160,
                    marginTop: 10,
                    marginLeft: 10,
                }}
            />
        </Pressable>
    );
};
const headerRight = (navigation: any) => {
    return (
        <Pressable
            onPress={() => navigation.navigate("ForDeliveryContainer")}
            style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
            })}
        >
            <View
                style={{
                    backgroundColor: "#E6B325",
                    borderWidth: 0.5,
                    borderColor: "#61481C",
                    borderRadius: 3,
                    marginRight: 20,
                    paddingHorizontal: 5,
                }}
            >
                <Foundation name="list" size={30} color="" />
            </View>
        </Pressable>
    );
};

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="ForDeliveryContainer"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name="ForDeliveryContainer"
                component={ForDeliveryContainer}
                options={({
                    navigation,
                }: RootTabScreenProps<"ForDeliveryContainer">) => ({
                    title: "",
                    tabBarIcon: () => (
                        <Image
                            source={forDelivery}
                            style={{ height: 30, width: 30, marginTop: 10 }}
                        />
                    ),
                    // headerShown: false,
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => headerRight(navigation),
                })}
            />
            <BottomTab.Screen
                name="MenuContainer"
                component={MenuContainer}
                options={({
                    navigation,
                }: RootTabScreenProps<"MenuContainer">) => ({
                    title: "",
                    tabBarIcon: () => (
                        <Image
                            source={menu}
                            style={{ height: 30, width: 30, marginTop: 10 }}
                        />
                    ),
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => headerRight(navigation),
                })}
            />
            <BottomTab.Screen
                name="FlavorsContainer"
                component={FlavorsContainer}
                options={({
                    navigation,
                }: RootTabScreenProps<"FlavorsContainer">) => ({
                    title: "",
                    tabBarIcon: () => (
                        // <TabBarIcon name="code" color={color} />
                        <Image
                            source={flavors}
                            style={{ height: 30, width: 30, marginTop: 10 }}
                        />
                    ),
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => headerRight(navigation),
                })}
            />
            <BottomTab.Screen
                name="HistoryContainer"
                component={HistoryContainer}
                options={({
                    navigation,
                }: RootTabScreenProps<"HistoryContainer">) => ({
                    title: "",
                    tabBarIcon: () => (
                        // <TabBarIcon name="code" color={color} />
                        <Image
                            source={history}
                            style={{ height: 30, width: 30, marginTop: 10 }}
                        />
                    ),
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => headerRight(navigation),
                })}
            />
            <BottomTab.Screen
                name="AccountContainer"
                component={AccountContainer}
                options={({
                    navigation,
                }: RootTabScreenProps<"AccountContainer">) => ({
                    title: "",
                    tabBarIcon: () => (
                        // <TabBarIcon name="code" color={color} />
                        <Image
                            source={account}
                            style={{ height: 30, width: 30, marginTop: 10 }}
                        />
                    ),
                    headerLeft: () => headerLeft(navigation),
                    headerRight: () => headerRight(navigation),
                })}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//     name: React.ComponentProps<typeof FontAwesome>["name"];
//     color: string;
// }) {
//     return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
