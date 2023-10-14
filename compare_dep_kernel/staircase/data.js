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
                    "title": "Input image (CRN)",
                    "version": "-",
                    "image": "images/crn.png"
                },
                {
                    "title": "DC",
                    "version": "-",
                    "image": "images/dc.png"
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
                    "title": "Squared bias (DC)",
                    "version": "-",
                    "image": "images/sqr_bias_dc.png"
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
                "Input image (CRN)",
                "DC",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "64",
                        "64",
                        "128",
                        "128"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.014486",
                        "0.013567",
                        "0.001894",
                        "0.003940"
                    ]
                },
                {
                    "label": "Squared bias",
                    "data": [
                        "-",
                        "-",
                        "0.000236",
                        "0.000006"
                    ]
                }
            ]
        }
    ]
}