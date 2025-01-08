import mongoose, {ConnectOptions} from 'mongoose';
import Gallery from "../models/Gallery";
import Review from "../models/Review";
import Salon from "../models/Salon";
import Service from "../models/Service";
import SocialLink from "../models/SocialLink";
import Team from "../models/Team";
import WorkingHours from "../models/WorkingHours";


const seedData = async () => {
    try {
        const mongoURI = 'mongodb+srv://marun:110977@massagesaloncluster.5ahjh.mongodb.net/?retryWrites=true&w=majority&appName=MassageSalonCluster/massage-salon'
        // Connect to MongoDB
        await mongoose.connect((mongoURI as string), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)

        // Clear existing data in the collections (optional)
        await Gallery.deleteMany({});
        await Review.deleteMany({});
        await Salon.deleteMany({});
        await Service.deleteMany({});
        await SocialLink.deleteMany({});
        await Team.deleteMany({});
        await WorkingHours.deleteMany({});


        const galleryData = [
            {
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fsalon_back.png?alt=media&token=85b35ffc-11fe-4f90-9dd4-ab661726c921',
                title: 'Image 1',
                dateAdded: new Date(),
            },
            {
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fsalon_1.jpg?alt=media&token=75b19721-7a21-4a9b-8c6b-782437f0b80e',
                title: 'Image 2',
                dateAdded: new Date(),
            },
            {
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fsalon_2.jpg?alt=media&token=0075cd5d-a856-4e61-b1ee-330656004f04',
                title: 'Image 3',
                dateAdded: new Date(),
            },
            {
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fsalon_4.jpg?alt=media&token=eda06475-913b-4869-8f8a-6140f90a2b5b',
                title: 'Image 4',
                dateAdded: new Date(),
            },
            {
                imageUrl: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fsalon_5.jpg?alt=media&token=b35da75d-8d71-4aab-8d30-018f57b3a33f',
                title: 'Image 5',
                dateAdded: new Date(),
            },
        ];
        await Gallery.insertMany(galleryData);
        console.log('Gallery data inserted');

        const reviewData = [
            {
                name: 'Іван Петренко',
                rating: 5,
                comment: 'Відмінний сервіс! Масаж просто чарівний!',
                date: new Date('2024-12-20'),
                isApproved: true,
            },
            {
                name: 'Олена Коваль',
                rating: 4,
                comment: 'Все було чудово, але трішки довго чекала на свою чергу.',
                date: new Date('2024-12-19'),
                isApproved: true,
            },
            {
                name: 'Сергій Іванчук',
                rating: 5,
                comment: 'Рекомендую всім! Дуже професійний масажист.',
                date: new Date('2024-12-18'),
                isApproved: true,
            },
            {
                name: 'Марія Сидорова',
                rating: 3,
                comment: 'Непогано, але ціни трохи завищені.',
                date: new Date('2024-12-17'),
                isApproved: true,
            },
        ];
        await Review.insertMany(reviewData);
        console.log('Review data inserted');

        const salonData = [
            {
                name: 'RelaxPro',
                phone: '380 68 234 0988',
                address: 'Пасічна 12, Київ',
                logo: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Flogo_dark.svg?alt=media',
                description: 'Ми є провідною компанією, яка спеціалізується на наданні високоякісних послуг для наших клієнтів.\n' +
                    '                            Наша місія полягає у створенні інноваційних рішень, які допомагають людям досягати своїх цілей.',
                closureReason: '',
                updatedAt: new Date(),
            },
        ];
        await Salon.insertMany(salonData);
        console.log('Salon data inserted');

        const serviceData = [
            {
                category: 'TOP',
                name: 'Масаж спини',
                duration: 30,
                price: 500,
                description: 'Розслабляючий масаж спини.',
                dateAdded: new Date('2024-12-01'),
            },
            {
                category: 'ALL',
                name: 'Педикюр',
                duration: 60,
                price: 800,
                description: 'Професійний педикюр.',
                dateAdded: new Date('2024-12-05'),
            },
            {
                category: 'TOP',
                name: 'Манікюр',
                duration: 60,
                price: 700,
                description: 'Естетичний манікюр.',
                dateAdded: new Date('2024-11-30'),
            },
            {
                category: 'ALL',
                name: 'Косметичний догляд',
                duration: 120,
                price: 1200,
                description: 'Комплексна косметична процедура.',
                dateAdded: new Date('2024-12-03'),
            },
        ];
        await Service.insertMany(serviceData);
        console.log('Service data inserted');

        const socialLinkData = [
            {
                platform: 'Facebook',
                url: 'https://facebook.com/yourpage',
            },
            {
                platform: 'Instagram',
                url: 'https://instagram.com/yourpage',
            },
            {
                platform: 'Viber',
                url: 'https://facebook.com/yourpage',
            },
            {
                platform: 'Telegram',
                url: 'https://instagram.com/yourpage',
            },
        ];
        await SocialLink.insertMany(socialLinkData);
        console.log('SocialLink data inserted');

        const teamData = [
            {
                name: 'Марія Іванова',
                position: 'Масажист',
                image: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fteam_3.jpg?alt=media&token=283beac2-0f58-42bf-bcb3-c7e56d004d37',
            },
            {
                name: 'Олександра Коваленко',
                position: 'Масажист',
                image: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fteam_2.jpg?alt=media&token=4d3ce1bb-e224-4d51-b342-bd278bf69b4f',
            },
            {
                name: 'Ірина Петренко',
                position: 'Масажист',
                image: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fteam_1.jpg?alt=media&token=497207d2-3cfc-4375-b5a6-adb1de0ffa9a',
            },
            {
                name: 'Дмитро Василенко',
                position: 'Масажист',
                image: 'https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fteam_4.webp?alt=media&token=bacbde4f-98db-4e75-8820-db49825c995a',
            },
        ];

        const services = await Service.find();
        const serviceIds = services.map((service) => service._id);

        const teamMembersWithServices = teamData.map((member) => {
            const randomServices: string[] = [];

            while (randomServices.length < 2) {
                const randomService = serviceIds[Math.floor(Math.random() * serviceIds.length)] as string;

                if (!randomServices.includes(randomService)) {
                    randomServices.push(randomService);
                }
            }

            return {
                ...member,
                services: randomServices,
            };
        });

        await Team.insertMany(teamMembersWithServices);
        console.log('TeamMember data inserted');

        const workingHoursData = [
            {
                day: 'Понеділок',
                hours: '9:00 - 18:00',
            },
            {
                day: 'Вівторок',
                hours: '9:00 - 18:00',
            },
            {
                day: 'Середа',
                hours: '9:00 - 18:00',
            },
            {
                day: 'Четвер',
                hours: '9:00 - 18:00',
            },
            {
                day: 'Пʼятниця',
                hours: '9:00 - 18:00',
            },
            {
                day: 'Субота',
                hours: '10:00 - 16:00',
            },
            {
                day: 'Неділя',
                hours: 'Закрито',
            },
        ];
        await WorkingHours.insertMany(workingHoursData);
        console.log('WorkingHours data inserted');

        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error seeding data:', error);
        await mongoose.connection.close();
    }
};

// Run the seed function
seedData();
