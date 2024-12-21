type ImageKey = 1 | 2 | 3 | 4;

type IImages = {
    [key in ImageKey]: {
        src: string;
        height: number;
        alt: string;
    }[];
};

export const GirlsImages: IImages = {
    1: [
        {
            src: "/Images/Home/photo nude maker.png",
            height: 500,
            alt: "ai nude clothes remover"
        },
        {
            src: "/Images/Home/image nude maker.png",
            height: 351,
            alt: "ai clothes remover nude"
        },
        {
            src: "/Images/Home/nude.ai photo maker.png",
            height: 500,
            alt: "clothes remover ai nude"
        },
    ],
    2: [
        {
            src: "/Images/Home/online nude maker.png",
            height: 200,
            alt: "ai nude clothing remover"
        },
        {
            src: "/Images/Home/free nude photo maker.png",
            height: 500,
            alt: "nude ai undress"
        },
        {
            src: "/Images/Home/fake nude maker free.png",
            height: 500,
            alt: "clothes remover nude ai"
        },
    ],
    3: [
        {
            src: "/Images/Home/best ai nude maker.png",
            height: 500,
            alt: "ai undress nudes"
        },
        {
            src: "/Images/Home/ai nude photo maker.png",
            height: 500,
            alt: "ai remove clothes nude"
        }
        ,
        {
            src: "/Images/Home/nudemaker ai.png",
            height: 200,
            alt: "ai nude website"
        }
    ],
    4: [
        {
            src: "/Images/Home/make pictures nude ai.png",
            height: 200,
            alt: "nude ai sites"
        },
        {
            src: "/Images/Home/make pics nude.png",
            height: 500,
            alt: "nude ai upload"
        },
        {
            src: "/Images/Home/make photo nude free.png",
            height: 500,
            alt: "ai nude males"
        },
    ]
}