
var fs = require('fs');
var matches = JSON.parse(fs.readFileSync('matches.json', 'utf-8'));

obj={};
for(let i in matches){
    if (obj.hasOwnProperty(matches[i]["season"])){
        obj[matches[i]["season"]]+=1;
    }
    else{
        obj[matches[i]["season"]]=0;

    }

}
var d=[];
for (let  i  in obj){
    d.push(obj[i]);
}
console.log(obj);
console.log(d);


Highcharts.chart('container', {

        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },
    
        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2008
            }
        },
    
        series: [{
            name: 'Installation',
            data: d
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });


