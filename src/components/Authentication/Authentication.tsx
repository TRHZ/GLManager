import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from '../../navigation';


const Authentication = () => {
    return (
        <SafeAreaView style={styles.root}>
            <Navigation />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F9FBFC',
    },
});

export default Authentication;