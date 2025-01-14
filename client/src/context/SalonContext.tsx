import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {getSalon, getSalonModified, updateSalon} from "../api/salon.ts"; // ваша функція для отримання даних
import { ISalon } from "../models/salon.ts";
import {showNotification} from "../components/notifications/notification.ts";

interface SalonContextType {
    salonData: ISalon;
    loading: boolean;
    error: string | null;
    updateSalonData: (updatedData: ISalon) => void;
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

const saveSalonDataToLocalStorage = (data: any) => {
    localStorage.setItem('salonData', JSON.stringify(data));
};

const getSalonDataFromLocalStorage = () => {
    const data = localStorage.getItem('salonData');
    if (data) {
        return JSON.parse(data);
    }
    return null;
};



export const SalonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [salonData, setSalonData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getSalonDataFromBD = async () => {
        const data = await getSalon()
        setSalonDataFromLocalStorage(data)
    };

    const setSalonDataFromLocalStorage = (data: any) => {
        saveSalonDataToLocalStorage(data);
        setSalonData(data);
        setLoading(false);
    };

    const updateSalonData = async (updatedData: ISalon) => {
        setLoading(true);
        console.log(updatedData);
        try {
            await updateSalon(updatedData).then(() => {
                    showNotification({
                        title: 'Дані оновлено',
                        color: 'green',
                        autoClose: 5000,
                    });
            }
            );
/*
            setSalonDataFromLocalStorage(updatedSalon);
*/
        } catch (err) {
            setError('Error updating salon data');
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log(salonData)
    }, [salonData]);

    useEffect(() => {
        const fetchSalonData = async () => {
            try {
                const cachedData = getSalonDataFromLocalStorage();

                if(cachedData == null || cachedData.updatedAt == '') {
                    await getSalonDataFromBD()
                }
                else {
                    console.log('else')
                    const lastModified = cachedData.updatedAt || '';

                    if(lastModified){
                        const response = await getSalonModified(lastModified)

                        if (response.status === 304) {
                            setSalonDataFromLocalStorage(cachedData)
                        } else if (response.status === 200 && response.statusText === 'OK') {
                            const data = await response.data;
                            setSalonDataFromLocalStorage(data)
                        } else {
                            throw new Error('Error loading data Salon');
                        }
                    }
                    else {
                        await getSalonDataFromBD()
                    }
                }
            } catch (err) {
                setError('Error loading data Salon');
                setLoading(false);
            }
        };


        console.log('start')
        fetchSalonData();
    }, []);

    return (
        <SalonContext.Provider value={{ salonData, loading, error, updateSalonData }}>
            {children}
        </SalonContext.Provider>
    );
};

export const useSalonContext = () => {
    const context = React.useContext(SalonContext);
    if (!context) {
        throw new Error('useSalonContext must be used within a SalonProvider');
    }
    return context;
};
