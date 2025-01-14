import {getDownloadURL, getStorage, ref, uploadBytes} from '@firebase/storage';
import {app} from "../firebase.ts";

const storage = getStorage(app);

const generateUniqueFileName = (fileName: string) => {
    const timestamp = Date.now();
    const fileExtension = fileName.split('.').pop();
    return `${timestamp}_${Math.random().toString(36).substring(2, 15)}.${fileExtension}`;
};

export const uploadLogoToFirebase = async (file: File): Promise<string> => {
    const uniqueFileName = generateUniqueFileName(file.name);
    const storageRef = ref(storage, `salon/${uniqueFileName}`)

    try {
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    } catch (error) {
        console.error('Error uploading logo:', error);
        throw new Error('Failed to upload image to Firebase');
    }
};
