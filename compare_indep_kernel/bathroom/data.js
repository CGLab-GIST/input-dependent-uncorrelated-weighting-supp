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
                        "128",
                        "128",
                        "256",
                        "256",
                        "256"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.086589",
                        "0.057743",
                        "0.032066",
                        "0.027440",
                        "0.009671"
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
                        "512",
                        "512",
                        "1024",
                        "1024",
                        "1024"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.022007",
                        "0.016828",
                        "0.009719",
                        "0.007926",
                        "0.003718"
                    ]
                }
            ]
        }
    ]
}