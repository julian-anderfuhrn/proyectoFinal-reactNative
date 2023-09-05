import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  settingList: {
    flexGrow: 1,
    marginBottom: 20, // Añade margen inferior a la FlatList
  },
  logOut: {
    alignItems: 'flex-start', // Alinea horizontalmente en el centro
    justifyContent: 'flex-start', // Alinea verticalmente en el centro
    paddingVertical: 20, 
    marginBottom: 300
  },
});
