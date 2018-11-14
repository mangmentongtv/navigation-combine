import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    //
    // Main.js
    //
    mainWrapper: {
        flex: 1,
        backgroundColor: '#ED4C67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainLogo: {
        fontFamily: 'OpenSans-Light',
        fontSize: 40,
        color: '#fff'
    },

    //
    // Button Theme
    //
    btnPrimary: {
        backgroundColor: '#ED4C67',
        height: 80
    },
    btnSecondary: {
        backgroundColor: '#999',
        height: 80
    },
    btnTxt: {
        fontFamily: 'OpenSans-Regular',
    },

    // sign in/sign up
    signWrapper: {
        flex: 1,
        backgroundColor: '#fff'
    },
    signTxt: {
        fontFamily: 'OpenSans-Regular',
    },

    //
    // DrawerContent.js
    //
    drawerTopContent: {
        flex: 1,
        backgroundColor: '#ED4C67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerListContent: {
        flex: 2
    },
    profileWrapper: {
        marginTop: 20
    },
    drawerTxtProfileName: {
        fontFamily: 'OpenSans-Light',
        fontSize: 20,
        color: '#fff'
    },
    drawerTxtList: {
        fontFamily: 'OpenSans-Regular',
    },

    //
    // Content inside tabs
    // Home.js/About.js/Avatar.js
    separatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleTxt: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
    },
    subTitleTxt: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 20,
    },
    descTxt: {
        fontFamily: 'OpenSans-Light',
        fontSize: 20,
        textAlign: 'justify'
    }
});

export default styles;
