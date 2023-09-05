import { useDispatch, useSelector } from "react-redux";
import { View, Text, FlatList, Pressable } from "react-native";
import { deleteSession } from "../../db";
import { AntDesign } from "@expo/vector-icons";
import { logout } from "../../store/auth/auth.slice";
import { styles } from "./styles";
import { MenuItem } from "../../components";
import { MENUS } from "../../constants/data/menus";

const Settings = ({ navigation }) => {
  const auth = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const onSelect = ({ route }) => {
    navigation.navigate(route);
  };
  const renderItem = ({ item }) => <MenuItem {...item} onSelect={onSelect} />;
  const keyExtractor = (item) => item.id;
  const onLogout = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession(auth.localId);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={MENUS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.settingList}
      />
      <Pressable style={styles.logOut} onPress={onLogout}>
        <AntDesign name="logout" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Settings;
