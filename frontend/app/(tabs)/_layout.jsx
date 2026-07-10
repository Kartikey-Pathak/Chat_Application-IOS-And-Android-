import { Platform } from 'react-native';
import AndroidTabs from '../components/AndroidTabs';
import IOSNativeTabs from '../components/IOSNativeTabs';

export default function Layout() {
  if (Platform.OS === 'ios') {
    return <IOSNativeTabs />;
  }

  return <AndroidTabs />;
}