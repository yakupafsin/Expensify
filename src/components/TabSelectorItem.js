import {Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Colors from '../styles/colors';
import styles from '../styles/styles';
import PressableWithFeedback from './Pressable/PressableWithFeedback';
import fontFamily from '../styles/fontFamily';

const propTypes = {
    /** Function to call when onPress */
    onPress: PropTypes.func,

    /** Icon to display on tab */
    icon: PropTypes.func,

    /** True if tab is the selected item */
    selected: PropTypes.bool,

    /** Title of the tab */
    title: PropTypes.string,
};

const defaultProps = {
    onPress: () => {},
    icon: () => {},
    selected: false,
    title: '',
};

function TabSelectorItem(props) {
    const textStyle = props.selected
        ? [styles.textStrong, styles.mt2, styles.textWhite, {fontFamily: fontFamily.EXP_NEUE}]
        : [styles.mt2, styles.colorMuted, {fontFamily: fontFamily.EXP_NEUE}];
    return (
        <>
            <PressableWithFeedback
                accessibilityLabel={props.title}
                style={[styles.tabSelectorButton]}
                onPress={props.onPress}
            >
                <Icon
                    src={props.icon}
                    fill={props.selected ? Colors.green : Colors.greenIcons}
                />
                <Text style={textStyle}>{props.title}</Text>
            </PressableWithFeedback>
        </>
    );
}

TabSelectorItem.propTypes = propTypes;
TabSelectorItem.defaultProps = defaultProps;
TabSelectorItem.displayName = 'TabSelectorItem';

export default TabSelectorItem;
