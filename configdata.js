const mapstyles = [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
]
const CAMPUS_BORDER = [
    { lat: 11.028498574892755, lng: 77.02538681997544 },
    { lat: 11.028319552982925, lng: 77.02541900648257 },
    { lat: 11.028282695517376, lng: 77.02542973531827 },
    { lat: 11.02805628527045, lng: 77.02547801507896 },
    { lat: 11.027692975440075, lng: 77.0255531169289 },
    { lat: 11.027387584220872, lng: 77.02559603227174 },
    { lat: 11.026997946687557, lng: 77.02563358319671 },
    { lat: 11.02691370066651, lng: 77.02565504086813 },
    { lat: 11.026955823665393, lng: 77.02593399059333 },
    { lat: 11.026761004677189, lng: 77.025982270354 },
    { lat: 11.026961089036162, lng: 77.02595008385677 },
    { lat: 11.026734677771088, lng: 77.02597690594814 },
    { lat: 11.026518797106643, lng: 77.02599836362202 },
    { lat: 11.026539858642469, lng: 77.02626122009687 },
    { lat: 11.026592512475395, lng: 77.02649189006459 },
    { lat: 11.026655697062457, lng: 77.02682984838937 },
    { lat: 11.02666622782565, lng: 77.02689958582148 },
    { lat: 11.027103254165462, lng: 77.02683521280724 },
    { lat: 11.027255949962385, lng: 77.02747894294971 },
    { lat: 11.02738758420642, lng: 77.02816558843499 },
    { lat: 11.02746129936542, lng: 77.02824605470965 },
    { lat: 11.02786146700507, lng: 77.02813876635258 },
    { lat: 11.028145796312774, lng: 77.0280904865919 },
    { lat: 11.028172123086613, lng: 77.02842308049884 },
    { lat: 11.028224776627221, lng: 77.02878249649504 },
    { lat: 11.028245838040823, lng: 77.02903998855204 },
    { lat: 11.028293226215915, lng: 77.02919555666979 },
    { lat: 11.028456452125825, lng: 77.029184827848 },
    { lat: 11.028777638266206, lng: 77.02914191250515 },
    { lat: 11.02887767977924, lng: 77.02912045483374 },
    { lat: 11.029298906829087, lng: 77.02903462414808 },
    { lat: 11.029451601485604, lng: 77.02900780205881 },
    { lat: 11.029699071967359, lng: 77.02897561555169 },
    { lat: 11.030288788020291, lng: 77.02879858976252 },
    { lat: 11.030773196750097, lng: 77.02856255537695 },
    { lat: 11.03045727810381, lng: 77.02818168170931 },
    { lat: 11.030194012305877, lng: 77.02780617245955 },
    { lat: 11.030104501880835, lng: 77.0276613331775 },
    { lat: 11.029888623684831, lng: 77.02735556135981 },
    { lat: 11.029562173428738, lng: 77.02688885700654 },
    { lat: 11.029240988145515, lng: 77.02639533056397 },
    { lat: 11.029004047957567, lng: 77.02605737223918 },
    { lat: 11.028835557041061, lng: 77.02587498203215 },
    { lat: 11.028519636312302, lng: 77.02539754884315 }
]
const DUSTBIN_LOCATIONS = [
    {
        id: 1,
        name: 'Dustbin 1',
        lat: 11.027171776134944,
        lng: 77.02654912826321,
        type: 'dustbin',
        address: 'Vinayagar temple',
        status: 'open',

    },
    {
        id: 2,
        name: 'Dustbin 2',
        lat: 11.028863304883986,
        lng: 77.02713853877735,
        type: 'dustbin',
        address: 'CIT Auditorium',
        status: 'open',
    }, {
        id: 3,
        name: 'Dustbin 3',
        lat: 11.027841340755277,
        lng: 77.0269111519787,
        type: 'dustbin',
        address: 'Library',
        status: 'open',
    },
    {
        id: 4,
        name: 'Dustbin 4',
        lat: 11.027594659231907,
        lng: 77.02632174146758,
        type: 'dustbin',
        address: 'IT block',
        status: 'open',
    },
]
const PLACES=[
    {
        label: "Vinayagar Temple",
        lat:  11.0168445, 
        lng:  76.9558321

    },
    {
        label: "Auditorium",
        lat: 11.029213280221644,
        lng: 77.02699343695316
    },
    {
        label: "Stadium",
        lat: 11.029198378252666,
        lng: 77.02845033307912
    },
    {
        label: "Library",
        lat: 11.02785595735227,
        lng: 77.02690674670977
    },
    {
        label: "Parking",
        lat: 11.028844371721652,
        lng: 77.02616575701803
    },
    {
        label: "IT Block",
        lat: 11.02765739939744,
        lng: 77.02633065036446
    },
    {
        label: "Main Block",
        lat: 11.028384098895009,
        lng: 77.02725928693546
    },
    {
        label: "Canteen",
        lat: 11.026861101170116,
        lng: 77.02616948597166
    },
    {
        label: "THERMAL Laboratory",
        lat: 11.028069476750414,
        lng: 77.02588278977139        
    }

]
const CIT_CENTER = { lat: 11.028336754545695, lng: 77.02657227122779 }
const CAMPUS_BOUNDS = {
    north: 11.029931646749812,
    south: 11.02479773732162,
    west: 77.02542088513447,
    east: 77.02946905646286
};
export {CAMPUS_BORDER,CAMPUS_BOUNDS,CIT_CENTER,DUSTBIN_LOCATIONS,PLACES,mapstyles}