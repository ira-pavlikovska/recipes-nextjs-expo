import { View, SafeAreaView as NativeSafeAreaView, ScrollView as NativeScrollView} from 'react-native'
import { styled } from 'nativewind'

export const Row = styled(View, "flex")

export const SafeAreaView = styled(NativeSafeAreaView, '')
export const ScrollView = styled(NativeScrollView, '')

