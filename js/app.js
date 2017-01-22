//The dropdown notification menu
$('.icon-bell-element').click(function () {
  $('#dropdown-notification-menu').toggle();
});

//Close the alert dialog box
$('.close-button').click(function () {
  $('.alert-box').fadeOut("slow");
});


//General settings for the chart
Chart.defaults.global.legend.display = false;
Chart.defaults.global.responsive = false;


  //Start: The web traffic widget
//Creating the variables: the container class & the chart itself
var $webTrafficWidget = $('.web-traffic-widget');

var dataWebTrafficWidget = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [
          {
              label: "Traffic",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "#E2E3F6",
              borderColor: "#7478BF",
              borderWidth: 1,
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "#7478BF",
              pointRadius: 3,
              pointBorderWidth: 1,
              pointBackgroundColor: "#fff",
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#7478BF",
              data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
              spanGaps: false,
          }
      ]
};


var myTrafficWidget = new Chart($webTrafficWidget, {
  type: 'line',
  data: dataWebTrafficWidget,
  options: {
    responsive: true
  }
});
  //End: The web traffic widget



  //Start: The daily traffic widget
var $dailyTrafficWidget = $('.daily-traffic-widget');

var dataDailyTrafficWidget = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF'
            ],
            borderColor: [
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF'
            ],
            borderWidth: 1,
            data: [75, 100, 175, 125, 225, 200, 100],
        },
        {
            label: "My Second dataset",
            backgroundColor: [
                '#6195ED',
                '#6195ED',
                '#6195ED',
                '#6195ED',
                '#6195ED',
                '#6195ED',
                '#6195ED'
            ],
            borderColor: [
                '#6195ED',
                '#6195ED',
                '#6195ED',
                '#6195ED',
                '#6195ED',
                '#6195ED',
                '#6195ED'
            ],
            borderWidth: 1,
            data: [175, 75, 50, 175, 125, 50, 250],
        }
    ]
};

var myDailyWidget = new Chart($dailyTrafficWidget, {
  type: 'bar',
  data: dataDailyTrafficWidget,
  options: {
    responsive: true
  }
});
  //End: The daily traffic widget


  //Start: The daily traffic widget
var $mobileUsersWidget = $('.mobile-users-widget');

var dataMobileUsersWidget = {
    labels: [
        "Phones",
        "Tablets",
        "Desktop",
        "Smart TV"
    ],
    datasets: [
        {
            data: [15, 15, 70, 5],
            backgroundColor: [
                "#81C98F",
                "#74B1BF",
                "#7377BF",
                "#6195ED"
            ],
            hoverBackgroundColor: [
                "#81C98F",
                "#74B1BF",
                "#7377BF",
                "#6195ED"
            ]
        }]
};

var myMobileUsersWidget = new Chart($mobileUsersWidget, {
  type: 'doughnut',
  data: dataMobileUsersWidget,
  options: {
    responsive: true
  }
});
  //End: The daily traffic widget
