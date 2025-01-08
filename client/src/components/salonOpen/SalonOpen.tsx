import {Text} from "@mantine/core";
import React from "react";
import {IconCircle} from "@tabler/icons-react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {selectIsOpenNow} from "../../store/selectors.ts";


interface SalonOpenProps {
    isDetailVersion?: boolean;
    closureReason?: string;
}

const SalonOpen: React.FC<SalonOpenProps> = ({ isDetailVersion = false }) => {
    const isOpenNow = useSelector((state: RootState) => selectIsOpenNow(state));
    const size = isDetailVersion ? 12 : 10;
    const sizeText = isDetailVersion ? 'md' : 'xs';

    return (
        <>
            {isOpenNow.isOpen ? (
                <Text size={sizeText} color="green">
                    <IconCircle size={size} fill="#4caf50" style={{margin: '0 7px'}}/>
                    <b>Зараз відчинено</b>
                </Text>
            ) : (
                <Text size={sizeText} color="red">
                    <IconCircle size={size} fill="red" style={{margin: '0 7px'}}/>
                    <b>{isOpenNow.closureReason || 'Зараз зачинено'}</b>
                </Text>
            )}
        </>
    );
};

export default SalonOpen;