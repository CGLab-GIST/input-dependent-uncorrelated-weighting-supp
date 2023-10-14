const data =
{
    "imageBoxes": [
        {
            "title": "Comparisons",
            "elements": [
                {
                    "title": "Input image (PT)",
                    "version": "-",
                    "image": "images/pt.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/afgsa.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/ours.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/ref.png"
                },
                {
                    "title": "Squared bias (AFGSA)",
                    "version": "-",
                    "image": "images/sqr_bias_afgsa.png"
                },
                {
                    "title": "Squared bias (ours)",
                    "version": "-",
                    "image": "images/sqr_bias_ours.png"
                }
            ]
        }
    ],
    "stats": [
        {
            "title": "Comparisons",
            "labels": [
                "Input image (PT)",
                "AFGSA",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "128",
                        "128",
                        "128"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.077382",
                        "0.002800",
                        "0.030405"
                    ]
                },
                {
                    "label": "Squared bias",
                    "data": [
                        "-",
                        "0.001284",
                        "0.000033"
                    ]
                }
            ]
        }
    ]
}