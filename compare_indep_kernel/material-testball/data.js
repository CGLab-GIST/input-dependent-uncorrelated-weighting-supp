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
                    "title": "Input image (CRN)",
                    "version": "-",
                    "image": "images/crn_low.png"
                },
                {
                    "title": "Uni-kernel",
                    "version": "-",
                    "image": "images/out_uni_low.png"
                },
                {
                    "title": "Cross-weighting",
                    "version": "-",
                    "image": "images/out_cross_low.png"
                },
                {
                    "title": "Ours",
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
                    "title": "Input image (CRN)",
                    "version": "-",
                    "image": "images/crn_high.png"
                },
                {
                    "title": "Uni-kernel",
                    "version": "-",
                    "image": "images/out_uni_high.png"
                },
                {
                    "title": "Cross-weighting",
                    "version": "-",
                    "image": "images/out_cross_high.png"
                },
                {
                    "title": "Ours",
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
                "Input image (CRN)",
                "Uni-kernel",
                "Cross-weighting",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "64",
                        "64",
                        "128",
                        "128",
                        "128"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.013489",
                        "0.013111",
                        "0.004221",
                        "0.002779",
                        "0.002281"
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
                "Input image (CRN)",
                "Uni-kernel",
                "Cross-weighting",
                "Ours"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "256",
                        "256",
                        "512",
                        "512",
                        "512"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.003369",
                        "0.001837",
                        "0.000496",
                        "0.000496",
                        "0.000431"
                    ]
                }
            ]
        }
    ]
}