const data =
{
    "imageBoxes": [
        {
            "title": "Short-term rendering",
            "elements": [
                {
                    "title": "Input image (PT)",
                    "version": "-",
                    "image": "images/pt_low.png"
                },
                {
                    "title": "Input image (L2)",
                    "version": "-",
                    "image": "images/L2_low.png"
                },
                {
                    "title": "Ours for L2",
                    "version": "-",
                    "image": "images/ours_low.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/ref.png"
                }
            ]
        },
        {
            "title": "Long-term rendering",
            "elements": [
                {
                    "title": "Input image (PT)",
                    "version": "-",
                    "image": "images/pt_high.png"
                },
                {
                    "title": "Input image (L2)",
                    "version": "-",
                    "image": "images/L2_high.png"
                },
                {
                    "title": "Ours for L2",
                    "version": "-",
                    "image": "images/ours_high.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/ref.png"
                }
            ]
        }
    ],
    "stats_short": [
        {
            "title": "short-term rendering",
            "labels": [
                "Input image (PT)",
                "Input image (L2)",
                "Ours for L2"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "64",
                        "64",
                        "64"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.176320",
                        "0.017594",
                        "0.007616"
                    ]
                }
            ]
        }
    ],
    "stats_long": [
        {
            "title": "long-term rendering",
            "labels": [
                "Input image (PT)",
                "Input image (L2)",
                "Ours for L2"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "256",
                        "256",
                        "256"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.043549",
                        "0.004832",
                        "0.002404"
                    ]
                }
            ]
        }
    ]
}