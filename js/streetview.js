let panorama;
var spin = 1;

    function stopSpin() {
        spin = 0;
    }

    function waterloo() {
        spin = 1
        var location = {lat:43.46878946248343, lng:-80.53955853891566};
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        marker1 = new google.maps.Marker({
            position: { lat:43.46870492531466, lng:-80.53942140192974},
            map: panorama,
        });


        const msgContent1=
        "<h1><b>The University of Waterloo</b></h1>"+
        "<p>The bastion of Chinese civilization. It was used to protect the Qing dynasty from invasions by opposing nations."+
        " It is over 2,300 years old, and although it stretches on for 21,000 km, 1/3rd of it has actually dissappeared without a trace.</p>"+
        "<img src='https://cdn.odysseytraveller.com/app/uploads/2019/07/great-wall-of-china.jpg' style='width:250px;height:200px; display:inline; margin-right:5px;'>"+
        "<img src='https://cdn.mos.cms.futurecdn.net/NcgbK2KReApn2bSMzdcMvh.jpg' style='width:250px;height:200px; display:inline; margin-left:5px;'>"+
        "<p></p><p>Learn more here: <a href='https://en.wikipedia.org/wiki/Great_Wall_of_China'>https://en.wikipedia.org/wiki/Great_Wall_of_China</a>"
        
        var infoWindow1 = new google.maps.InfoWindow({
            content: msgContent1
        });

        marker1.addListener('click', function() {
            infoWindow1.open(panorama, marker1);
            document.getElementById("vehicle1").checked = true;
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();


        marker2 = new google.maps.Marker({
            position: {lat:43.46907551663215, lng:-80.54021460752949},
            map:panorama,
        });

        const msgContent2=
        "<h1><b>Visitor Center</b></h1>"
        var infoWindow2 = new google.maps.InfoWindow({
            content: msgContent2
        });

        marker2.addListener('click', function() {
            infoWindow2.open(panorama,  marker2);
            document.getElementById("vehicle2").checked = true;
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();


        marker3 = new google.maps.Marker({
            position: {lat:43.472512665965326, lng:-80.5407240753727},
            map:panorama,
        });

        const msgContent3=
        "<h1><b>Engineering 5 and Engineering 7</b></h1>"
        var infoWindow3 = new google.maps.InfoWindow({
            content: msgContent3
        });

        marker3.addListener('click', function() {
            infoWindow3.open(panorama,  marker3);
            document.getElementById("vehicle2").checked = true;
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();

        marker4 = new google.maps.Marker({
            position: {lat:43.472648849874545, lng:-80.54136030372163},
            map:panorama,
        });
    
        const msgContent4=
        "<h1><b>Davis Center (Cheriton School of Computer Science)</b></h1>"
        var infoWindow4 = new google.maps.InfoWindow({
            content: msgContent4
        });
    
        marker4.addListener('click', function() {
            infoWindow4.open(panorama,  marker3);
            document.getElementById("vehicle2").checked = true;
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }


 // Waterloo Sub locations


            function engineering7(){
                spin = 1
                var location = {lat:43.472797177811465, lng:-80.54004997684108};
                panorama.setPosition(location);
                panorama.setPov({
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                });

                var elmnt = document.getElementById("street-view");
                elmnt.scrollIntoView();
            }

            function village1(){
                spin = 1
                var location = {lat:43.4716152773034, lng:-80.54987266488689 };
                panorama.setPosition(location);
                panorama.setPov({
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                });

                var elmnt = document.getElementById("street-view");
                elmnt.scrollIntoView();
            }
            
            function compsciwaterloo(){
                spin = 1
                var location = {lat:43.472708412516305, lng:-80.54225328650985 };
                panorama.setPosition(location);
                panorama.setPov({
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                });

                var elmnt = document.getElementById("street-view");
                elmnt.scrollIntoView();
            }
            function rev(){
                spin = 1
                var location = {lat:43.47029782750193, lng:-80.55424038220914 };
                panorama.setPosition(location);
                panorama.setPov({
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                });

                var elmnt = document.getElementById("street-view");
                elmnt.scrollIntoView();
            }
            function PhysicalActivitiesComplex(){
                spin = 1
                var location = {lat:43.472282113199945, lng:-80.54614562541302 };
                panorama.setPosition(location);
                panorama.setPov({
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                });

                var elmnt = document.getElementById("street-view");
                elmnt.scrollIntoView();
            }
            function stjeromesdorm(){
                spin = 1
                var location = {  lat: 43.46914624473236, lng:-80.54541167568975};
                panorama.setPosition(location);
                panorama.setPov({
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                });

                var elmnt = document.getElementById("street-view");
                elmnt.scrollIntoView();
            }
            function conrad(){
                spin = 1
                var location = {     lat:43.46653163368852, lng:-80.54520251534645};
                panorama.setPosition(location);
                panorama.setPov({
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                });

                var elmnt = document.getElementById("street-view");
                elmnt.scrollIntoView();
            }
            function stpaul(){
                spin = 1
                var location = {lat:43.46776189935356, lng:-80.54673675767323};
                panorama.setPosition(location);
                panorama.setPov({
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                });

                var elmnt = document.getElementById("street-view");
                elmnt.scrollIntoView();
            }

 



    function uofT() {
        spin = 1
        var location = { lat:43.662377709999234, lng:-79.39543681844867 };
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        marker1 = new google.maps.Marker({
            position: { lat: 43.6624926118167, lng:-79.39547957973552 },
            map: panorama,
        });

        const msgContent1=
        "<h1><b>University of Toronto - St. George Campus</b></h1>"+
        "<p><b>Chichén Itzá</b> is a monument to the ancient Mayans that lived on the land before. They held many philosophical"+
        "values and even predicted the time when the world would end.</p>";+
        "<img src='https://www.planetware.com/photos-large/MEX/mexico-chichen-itza-history.jpg' style='width:250px;height:200px; display:inline; margin-right:5px;'>"+
        "<img src='https://wander-lush.org/wp-content/uploads/2020/05/Mexico-culture-day-of-the-dead.jpg' style='width:250px;height:200px; display:inline; margin-left:5px;'>"+
        "<p></p><p>Learn more here: <a href='https://en.wikipedia.org/wiki/Chichen_Itza'>https://en.wikipedia.org/wiki/Chichen_Itza</a>"
        
        var infoWindow1 = new google.maps.InfoWindow({
            content: msgContent1
        });

        marker1.addListener('click', function() {
            infoWindow1.open(panorama, marker1);
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }



    function western() {
        spin = 1
        var location = {lat:43.0083747383758, lng:-81.27281251513199};
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        marker1 = new google.maps.Marker({
            position: {lat:43.008392881101635, lng:-81.27289499306349 },
            map: panorama,
        });

        const msgContent1=
        "<h1><b>Petra</b></h1>"+
        "<p><b>Petra</b>, also called the \"Rose City\" due to the colour of its rocks which take a red-pink hue at sunset/sunrise" + 
        "are the embodiment of the history of Jordan.</p>";+
        "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Treasury_petra_crop.jpeg/1200px-Treasury_petra_crop.jpeg' style='width:250px;height:200px; display:inline; margin-right:5px;'>"+
        "<img src='https://farm2.static.flickr.com/1110/1160501648_01b4679788.jpg' style='width:250px;height:200px; display:inline; margin-left:5px;'>"+
        "<p></p><p>Learn more here: <a href='https://en.wikipedia.org/wiki/Petra'>https://en.wikipedia.org/wiki/Petra</a>"    
        
        var infoWindow1 = new google.maps.InfoWindow({
            content: msgContent1
        });

        marker1.addListener('click', function() {
            infoWindow1.open(panorama, marker1);
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();

    }

    function westernsocialsci(){
        spin = 1
        var location = {lat:43.009391,lng:-81.2749219};
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }
    function westernlibrary(){
        spin = 1
        var location = {lat:43.0080766,lng:-81.276021};
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }
    function spencerengineering(){
        spin = 1
        var location = {lat:43.0056345,lng:-81.2756397};
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }




    function queens() {
        spin = 1
        var location = { lat:44.22804092217433, lng:-76.49563209958787};
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        marker1 = new google.maps.Marker({
            position: { lat:-13.16309, lng:-72.54486 },
            map: panorama,
        });

        const msgContent1=
        "<h1><b>Machu Picchu</b></h1>"+
        "<p><b>Machu Picchu</b>, is an intricate ancient city with many sights to behold. It is made up of over 150 buildings, ranging "+
        "baths and houses to temples and sanctuaries. Some of the most major buildings is the <b>\"Templo de Sel\"</b> and <b>\"Templo de\""+
        " las Tres Ventanas\"</b>. Feel free to get lost in the mazes!</p>"+
        "<img src='https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg' style='width:250px;height:200px; display:inline; margin-right:5px;'>"+
        "<img src='https://cdn.abcotvs.com/dip/images/5737967_localish-PMP1443-PERUINCAFOLK-WABC-vid.jpg' style='width:250px;height:200px; display:inline; margin-left:5px;'>"+
        "<p></p><p>Learn more here: <a href='https://en.wikipedia.org/wiki/Machu_Picchu'>https://en.wikipedia.org/wiki/Machu_Picchu</a>"
        
        var infoWindow1 = new google.maps.InfoWindow({
            content: msgContent1
        });

        marker1.addListener('click', function() {
            infoWindow1.open(panorama, marker1);
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }

    function christTheRedeemer() {
        spin = 1
        var location = { lat:-22.9518499, lng:-43.2100847 };
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        marker1 = new google.maps.Marker({
            position: { lat:-22.9518715, lng:-43.2101681 },
            map: panorama,
        });

        const msgContent1=
        "<h1><b>Christ The Redeemer</b></h1>"+
        "<p><b>Christ The Redeemer</b>, is the soul of Brazil, and is a defining feature of the environment there. Looking over the sprawling"+
        " coastal city of Rio De Janeiro, it is a tourist attraction that attracts many to fly around it on gliders. Fun fact, the structure took"+
        " over 9 years to build!</p>"+
        "<img src='https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Corbis-42-24002457_sbfkds.jpg' style='width:250px;height:200px; display:inline; margin-right:5px;'>"+
        "<img src='https://i.pinimg.com/originals/4b/97/f6/4b97f6800273e03d956bf48f2da969b1.jpg' style='width:250px;height:200px; display:inline; margin-left:5px;'>"+
        "<p></p><p>Learn more here: <a href='https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)'>https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)</a>"
        
        var infoWindow1 = new google.maps.InfoWindow({
            content: msgContent1
        });

        marker1.addListener('click', function() {
            infoWindow1.open(panorama, marker1);
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }

    function colosseum() {
        spin = 1
        var location = { lat:41.8906763, lng:12.490738 };
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });
        marker1 = new google.maps.Marker({
            position: { lat:41.8906, lng:12.4907 },
            map: panorama,
        });

        const msgContent1=
        "<h1><b>The Colosseum</b></h1>"+
        "<p><b>The Colosseum</b> was an iconic part of the ancient Roman Empire. Within its walls, brutal fights would take place between"+
        " animals and humans. Thousands of people were killed for pride and glory. It was a sport enjoyed by many over 2,000 years ago." +
        " Over 10,000 animals were killed within its walls every day!</p>"+
        "<img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F02%2Finterior-rome-colosseum-italy-ARENA0217.jpg' style='width:250px;height:200px; display:inline; margin-right:5px;'>"+
        "<img src='https://www.italymagazine.com/sites/default/files/styles/800xauto/public/feature-story/leader/bigstock-piazza-campo-de-fiori-in-rome-68369599.jpg?itok=83zXr_Kd' style='width:250px;height:200px; display:inline; margin-left:5px;'>"+
        "<p></p><p>Learn more here: <a href='https://en.wikipedia.org/wiki/Colosseum'>https://en.wikipedia.org/wiki/Colosseum</a>"
        
        var infoWindow1 = new google.maps.InfoWindow({
            content: msgContent1
        });

        marker1.addListener('click', function() {
            infoWindow1.open(panorama, marker1);
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }

    function tajMahal() {
        spin = 1
        var location = { lat: 27.1746029, lng:78.0421013 };
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        marker1 = new google.maps.Marker({
            position: { lat:27.1747398, lng:78.0420873 },
            map: panorama,
        });

        const msgContent1=
        "<h1><b>Taj Mahal</b></h1>"+
        "<p><b>Taj Mahal</b> is the iconic tomb of Mumtaaz Mahal, the beloved wife of Shan Jhan who wanted to cherish his wife even in death."+
        " The materials for the construction of this monument were brought by a whopping 1,000 Elephants and 22,000 labourers, all"+
        " for an homage to love.</p>"+
        "<img src='https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg' style='width:250px;height:200px; display:inline; margin-right:5px;'>"+
        "<img src='https://www.holidify.com/blog/wp-content/uploads/2015/07/13896645072_c994520879_k.jpg' style='width:250px;height:200px; display:inline; margin-left:5px;'>"+
        "<p></p><p>Learn more here: <a href='https://en.wikipedia.org/wiki/Taj_Mahal'>https://en.wikipedia.org/wiki/Taj_Mahal</a>"
        var infoWindow1 = new google.maps.InfoWindow({
            content: msgContent1
        });

        marker1.addListener('click', function() {
            infoWindow1.open(panorama, marker1);
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }

    function aurora() {
        spin = 1
        var location = { lat: 68.509006, lng: 27.481845};
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        marker1 = new google.maps.Marker({
            position: { lat:68.50915, lng:27.4818 },
            map: panorama,
        });

        const msgContent1=
        "<h1><b>Aurora Borealis</b></h1>"+
        "<p><b>Taj Mahal</b> is the iconic tomb of Mumtaaz Mahal, the beloved wife of Shan Jhan who wanted to cherish his wife even in death."+
        " The materials for the construction of this monument were brought by a whopping 1,000 Elephants and 22,000 labourers, all"+
        " for an homage to love.</p>"+
        "<img src='https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg' style='width:250px;height:200px; display:inline; margin-right:5px;'>"+
        "<img src='https://www.holidify.com/blog/wp-content/uploads/2015/07/13896645072_c994520879_k.jpg' style='width:250px;height:200px; display:inline; margin-left:5px;'>"+
        "<p></p><p>Learn more here: <a href='https://en.wikipedia.org/wiki/Taj_Mahal'>https://en.wikipedia.org/wiki/Taj_Mahal</a>"
        var infoWindow1 = new google.maps.InfoWindow({
            content: msgContent1
        });

        marker1.addListener('click', function() {
            infoWindow1.open(panorama, marker1);
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }

    function mountEverest() {
        spin = 1
        var location = {lat: 27.959926, lng: 86.756516};
        panorama.setPosition(location);
        panorama.setPov({
            heading: 34,
            pitch: 10,
            zoom: 1
        });

        marker1 = new google.maps.Marker({
            position: { lat:68.50915, lng:27.4818 },
            map: panorama,
        });

        const msgContent1=
        "<h1><b>Mount Everest</b></h1>"+
        "<p><b>Taj Mahal</b> is the iconic tomb of Mumtaaz Mahal, the beloved wife of Shan Jhan who wanted to cherish his wife even in death."+
        " The materials for the construction of this monument were brought by a whopping 1,000 Elephants and 22,000 labourers, all"+
        " for an homage to love.</p>"+
        "<img src='https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg' style='width:250px;height:200px; display:inline; margin-right:5px;'>"+
        "<img src='https://www.holidify.com/blog/wp-content/uploads/2015/07/13896645072_c994520879_k.jpg' style='width:250px;height:200px; display:inline; margin-left:5px;'>"+
        "<p></p><p>Learn more here: <a href='https://en.wikipedia.org/wiki/Taj_Mahal'>https://en.wikipedia.org/wiki/Taj_Mahal</a>"
        var infoWindow1 = new google.maps.InfoWindow({
            content: msgContent1
        });

        marker1.addListener('click', function() {
            infoWindow1.open(panorama, marker1);
        });
        var elmnt = document.getElementById("street-view");
        elmnt.scrollIntoView();
    }

    function initialize() {
        const location = { lat:43.4688309, lng:-80.5393162 };
        panorama = new google.maps.StreetViewPanorama(document.getElementById("street-view"), {
            position: location,
            pov: { heading: 165, pitch: 0 },
            zoom: 1,
        });

        var pov = panorama.getPov();
        pov.heading = 0;
        window.setInterval(function() {
            pov.heading += 0.2;
            if (spin == 1) {
                panorama.setPov(pov);
            }
        }, 10);

    }
    

    //