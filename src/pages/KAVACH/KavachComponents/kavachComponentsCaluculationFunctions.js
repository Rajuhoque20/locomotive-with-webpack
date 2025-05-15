import { Icons } from "#framework";
export const barHeightCaluCulations = (meter,valueList) => {
    const map = valueList;

    if (meter <= map[0].meter) return map[0].barHeight;
    if (meter >= map[map.length - 1].meter) return map[map.length - 1].barHeight;
  
    for (let i = 0; i < map.length - 1; i++) {
      const curr = map[i];
      const next = map[i + 1];
  
      if (meter >= curr.meter && meter <= next.meter) {
        const ratio = (meter - curr.meter) / (next.meter - curr.meter);
        return curr.barHeight + ratio * (next.barHeight - curr.barHeight);
      }
    }
  
    return 0;
}

export const getModes = (key) => {
    const {
        standby,
        staffresponsiblemode,
        limitedsupervisionmode,
        overridemode,
        onsightmode,
        tripmode,
        posttripmode,
        reversemode,
        shuntmode,
        nonleadingmode,
        systemfailure,
    } = Icons.DDUIcons
    const modes = [
        {
            id: 1,
            lable: 'Stand By',
            key: 'SB',
            icon: standby,
        },
        {
            id: 2,
            lable: 'Staff Responsible Mode',
            key: 'SR',
            icon: staffresponsiblemode,
        },
        {
            id: 3,
            lable: 'Limited Supervision Mode',
            key: 'LS',
            icon: limitedsupervisionmode,
        },
        {
            id: 4,
            lable: 'Override Mode',
            key: 'OV',
            icon: overridemode,
        },
        {
            id: 5,
            lable: 'Onsight Mode',
            key: 'OS',
            icon: onsightmode,
        },
        {
            id: 6,
            lable: 'Trip Mode',
            key: 'TR',
            icon: tripmode,
        },
        {
            id: 7,
            lable: 'Post Trip Mode',
            key: 'PT',
            icon: posttripmode,
        },
        {
            id: 8,
            lable: 'Reverse Mode',
            key: 'RV',
            icon: reversemode,
        },
        {
            id: 9,
            lable: 'Shunt Mode',
            key: 'SH',
            icon: shuntmode,
        },
        {
            id: 10,
            lable: 'Non Leading Mode',
            key: 'NL',
            icon: nonleadingmode,
        },
        {
            id: 11,
            lable: 'System Failure',
            key: 'SF',
            icon: systemfailure,
        },

    ]
    const selecetdmode = modes.find((x) => x.key === key)
    return selecetdmode
}

export const getBreak = (id) => {
    const {
        emergencybrake, fullservicebrake, normalbrake
    } = Icons.DDUIcons
    const modes = [
        {
            id: 3,
            lable: 'Emergency Brake',
            key: 'emergencybrake',
            icon: emergencybrake,
        },
        {
            id: 2,
            lable: 'Full Service Brake',
            key: 'Full',
            icon: fullservicebrake,
        },
        {
            id: 1,
            lable: 'Normal Brake',
            key: 'Normal',
            icon: normalbrake,
        }

    ]
    const selecetdmode = modes.find((x) => x.id === id)
    return selecetdmode
}