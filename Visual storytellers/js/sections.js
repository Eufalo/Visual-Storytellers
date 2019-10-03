//////////////////////////////////////////////////////////////////////////
// scrollVis
//Visualizamos el contenido del html por secciones dependiendo en la seccion que se dese visualizar se cargaran los dataos para dicha seccion
//////////////////////////////////////////////////////////////////////////
var scrollVis = function (rutas, aerolineas, aviones, aeropuertos) {

    // Definicion tamano de svg y margenes de la visualizacion
    var width = 440;
    var height = 440;
    var margin = {
        top: 10,
        left: 40,
        bottom: 40,
        right: 10
    };

    // Indices para controlar el paso de una seccion a otra
    var lastIndex = -1;
    var activeIndex = 0;

    // Cuando se realiza el scrolling se iran actividando las funciones correspondientes al indice
    var activateFunctions = [];

    // Definicion de colores de los agentes
    var wrong = "#E94F53"

    // Elementos SVG definidos mediante path
    var avionpapel = [{
        fillOk: "Black",
        fillBad: wrong,
        d: "m59.84,7.897c-0.218,-0.268 -0.556,-0.393 -0.893,-0.353c-0.077,0.004 -0.149,0.017 -0.224,0.039l-57.985,15.771c-0.426,0.116 -0.726,0.498 -0.738,0.939c-0.011,0.441 0.269,0.838 0.688,0.976l21.217,6.952l-1.898,15.182c-0.05,0.4 0.145,0.791 0.494,0.991c0.155,0.089 0.327,0.133 0.498,0.133c0.215,0 0.43,-0.069 0.608,-0.206l7.765,-5.946l6.807,9.725c0.188,0.269 0.494,0.427 0.819,0.427c0.022,0 0.045,-0.001 0.068,-0.002c0.35,-0.024 0.661,-0.229 0.821,-0.542l22.063,-43c0.184,-0.352 0.14,-0.778 -0.11,-1.086zm-6.945,3.344l-30.034,19.188l-18.377,-6.021l48.411,-13.167zm-30.607,34.04l1.382,-11.053l4.555,6.507l-5.937,4.546zm14.58,4.313l-12.45,-17.786l32.1,-20.508l-19.65,38.294"
    }];

    var avionelice = [{
        fillOk: "Black",
        fillBad: wrong,
        d: "m512,124.30859l-37.41016,0l-45.1914,53.02735l-35.48438,0l-12.76562,-13.375l91.96093,-163.96094l-92.33203,0c-29.30468,0 -57.07421,11.19141 -78.19921,31.51953l-67.14844,64.72656c-0.48047,-0.0039 -0.96094,-0.01953 -1.44531,-0.01953l-10.91016,0c-53.85156,0 -105.62109,22.75 -142.03906,62.41797l-7.20703,7.84766c-10.16797,11.07812 -16.46875,25 -18.14454,39.77344l-14.29687,0l7.42969,-41.26954c1.13281,-7.09375 -0.89063,-14.29687 -5.55078,-19.76171c-4.66407,-5.46875 -11.45313,-8.60547 -18.63672,-8.60938c-0.00391,0 -0.00782,0 -0.01563,0c-7.17969,0 -13.96875,3.13281 -18.63281,8.59375c-2.29297,2.6875 -3.94922,5.78906 -4.90625,7.09766l10.61328,66.63281l-11.38672,58.67578c-1.11719,7.08594 0.91406,14.28125 5.57422,19.73438c4.65625,5.45312 11.44141,8.58593 18.66406,8.58984l0.01172,0c7.17188,0 13.95703,-3.125 18.6211,-8.57031c4.66406,-5.45313 6.70312,-12.64844 5.58203,-19.77344l-7.97266,-41.29688l18.6875,0c2.22656,4.79297 5.28516,9.21875 9.10938,13.09375c8.80468,8.92969 20.5625,13.84766 33.10546,13.84766l58.00391,0c-1.34766,4.36328 -2.07031,8.96875 -2.07031,13.6875c0,25.57031 20.80469,46.37109 46.37109,46.37109c11.92578,0 22.97266,-4.44922 31.31641,-12.09765l67.28125,64.74609c21.11719,20.32031 48.88672,31.51172 78.1914,31.51172l81.32032,0l-67.76172,-144.29688l117.66406,0.08594l0,-138.94922zm-188.57812,-71.14843c15.48828,-14.90625 35.85937,-23.11719 57.35546,-23.11719l41.03516,0l-62.90234,112.15234c-24.34375,-20.65625 -53.5586,-34.96484 -84.64453,-41.65625l49.15625,-47.3789zm-104.10157,73.16015l0,51.01563l-114.62109,0c29.79687,-31.56641 71.26172,-50.00781 114.62109,-51.01563zm-15.33203,166.94532c-9.0039,0 -16.32812,-7.32422 -16.32812,-16.32813c0,-3.25781 0.97265,-6.36328 2.69531,-8.98047l23.14453,22.26953c-2.70703,1.9375 -5.99609,3.03907 -9.51172,3.03907zm176.78906,84.15625c-21.49609,0 -41.86718,-8.20704 -57.35937,-23.11719l-94.62891,-91.05469l132.38672,0l53.6211,114.17188l-34.01954,0zm101.17969,-144.22657l-380.27734,0.01172c-4.4375,0 -8.59766,-1.74219 -11.71485,-4.90234c-3.11718,-3.16016 -4.79687,-7.34375 -4.73828,-11.78125l0.03907,-2.6875c0.02343,-2.17969 0.23046,-4.33594 0.59375,-6.45703l163.5039,0l0,-80.35938c38.71485,3.71875 75.3711,21.34766 102.38281,49.64844l29.30469,30.71094l62.21485,0l38.6914,-45.39453l0,71.21093zm0,0"

    }];

    var avionAeroplano = [{
        fillOk: "Black",
        fillBad: wrong,
        d: "m465.78125 48.582031c-32.675781-22.144531-80.503906-34.195312-142.160156-35.828125-4.136719-.117187-7.585938 3.15625-7.695313 7.296875s3.15625 7.585938 7.296875 7.695313c56.3125 1.492187 100.105469 11.839844 130.296875 30.757812-1.648437 2.730469-3.195312 5.5625-4.640625 8.484375-34.320312-11.746093-81.304687-17.703125-139.777344-17.703125-64.160156 0-134.398437 7.109375-192.707031 19.5-22.503906 4.78125-47.820312 11.347656-69.070312 19.875 48.011719-31.75 143.195312-57.453125 242.171875-60.769531 4.140625-.140625 7.382812-3.605469 7.242187-7.746094-.136719-4.140625-3.609375-7.382812-7.746093-7.246093-66.359376 2.226562-138.503907 15.539062-192.988282 35.617187-.636718.234375-1.253906.472656-1.882812.707031l-7.910156-27.207031c-1.734376-5.972656-6.558594-10.605469-12.59375-12.101563l-37.878907-9.394531c-5.257812-1.300781-10.722656-.136719-14.992187 3.203125-4.269532 3.339844-6.71875 8.363282-6.71875 13.785156v79.96875c-9.304688 10.875-14.027344 22.167969-14.027344 33.738282 0 11.484375 4.796875 22.765625 14.027344 33.585937v80.121094c0 5.417969 2.449218 10.441406 6.71875 13.78125 3.121094 2.445313 6.886718 3.726563 10.742187 3.726563 1.414063 0 2.839844-.171876 4.25-.523438l37.882813-9.390625c6.03125-1.496094 10.855468-6.132813 12.589844-12.101563l7.910156-27.210937c3.347656 1.25 6.753906 2.488281 10.265625 3.699219 17.90625 6.1875 37.324219 11.617187 57.570312 16.199218l32.328125 85.699219c2.554688 6.773438 9.132813 11.324219 16.371094 11.324219h18.589844c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-18.585938c-1.035156 0-1.976562-.652344-2.339844-1.617188l-28.9375-76.710937c42.453126 8.402344 87.621094 13.074219 129.722657 13.074219 9.976562 0 19.613281-.261719 28.914062-.773438l-4.125 9.984375h-59.28125c-11.3125 0-20.519531 9.207031-20.519531 20.519531 0 11.316407 9.207031 20.523438 20.519531 20.523438h42.316407l-5.5625 13.453125c-.386719.9375-1.292969 1.542969-2.308594 1.542969l-45.632813.003906c-4.144531 0-7.5 3.355469-7.5 7.5 0 4.140625 3.355469 7.5 7.5 7.5l45.632813-.003906c7.105468 0 13.457031-4.242188 16.171875-10.8125l29.527343-71.441406c44.765626-4.152344 80.820313-14.769532 107.53125-31.722657 32.519532-20.640625 49.710938-50.007812 49.710938-84.929687 0-33.574219-15.980469-62.148438-46.21875-82.632813zm-191.167969 236.542969c-3.042969 0-5.519531-2.476562-5.519531-5.523438 0-3.042968 2.476562-5.519531 5.519531-5.519531h53.078125l-4.566406 11.042969zm-245.070312-136.726562c15.980469 3.273437 42.425781 6.976562 86.800781 10.472656 58.210938 4.582031 128.46875 7.210937 192.757812 7.210937 52.394532 0 95.53125-1.773437 128.371094-5.269531 1.367188 7.1875 3.230469 14.140625 5.574219 20.765625-32.640625 10.992187-77.652344 16.5625-133.945313 16.5625-63.59375 0-133.0625-7.0625-190.589843-19.382813-40.753907-8.726562-71.878907-19.476562-88.96875-30.359374zm89.96875-64.941407c57.328125-12.183593 126.433593-19.171875 189.589843-19.171875 56.28125 0 101.296876 5.574219 133.945313 16.566406-2.34375 6.625-4.203125 13.578126-5.574219 20.765626-15.722656-1.671876-33.980468-2.960938-54.394531-3.84375-4.132813-.195313-7.636719 3.035156-7.816406 7.171874-.175781 4.140626 3.035156 7.636719 7.171875 7.816407 19.886718.855469 37.660156 2.105469 52.953125 3.71875-.445313 4.847656-.6875 9.765625-.6875 14.734375s.242187 9.886718.6875 14.734375c-32.238281 3.40625-74.675781 5.132812-126.285157 5.132812-63.914062 0-133.742187-2.609375-191.578124-7.164062-58.464844-4.605469-84.214844-9.550781-95.417969-12.714844 11.300781-3.203125 37.273437-8.148437 96.429687-12.769531 57.636719-4.503906 127.09375-7.089844 190.566406-7.089844 13.617188 0 26.847657.125 39.328126.375 4.148437.097656 7.5625-3.210938 7.644531-7.351562.082031-4.144532-3.207031-7.566407-7.347657-7.648438-12.582031-.246094-25.910156-.375-39.625-.375-63.84375 0-133.730468 2.601562-191.734374 7.132812-39.304688 3.074219-68.683594 6.636719-87.945313 10.648438 17.234375-11.019531 48.824219-21.898438 90.089844-30.667969zm-89.523438-67.917969c.359375-.28125 1.113281-.710937 2.140625-.457031l37.878906 9.390625c.863282.210938 1.550782.875 1.800782 1.730469l8.300781 28.5625c-20.921875 8.777344-38.046875 18.359375-51.082031 28.578125v-65.835938c0-1.058593.601562-1.6875.960937-1.96875zm41.820313 220.691407c-.25.851562-.9375 1.515625-1.800782 1.726562l-37.878906 9.390625c-1.027344.253906-1.78125-.175781-2.140625-.457031s-.960937-.910156-.960937-1.96875v-65.929687c12.949218 10.199218 30.066406 19.839843 51.082031 28.667968zm37.476562-33.503907c-24.988281-8.628906-46.171875-18.554687-61.957031-28.964843 20.949219 8.410156 45.832031 14.90625 68.042969 19.664062 58.519531 12.53125 129.128906 19.714844 193.730468 19.714844 58.484376 0 105.460938-5.957031 139.773438-17.703125 1.445312 2.925781 2.996094 5.757812 4.648438 8.492188-32.8125 20.527343-81.386719 30.945312-144.421876 30.945312-66.835937-.003906-141.535156-12.019531-199.816406-32.148438zm356.476563-7.574218c-10.378907-17.648438-16.0625-40.082032-16.0625-63.9375 0-23.851563 5.683593-46.289063 16.058593-63.933594 20.480469 16.886719 31.242188 38.804688 31.242188 63.933594 0 25.167968-10.746094 47.035156-31.238281 63.9375zm0 0"
    }];

    var avioncaza = [{
        fillOk: "Black",
        fillBad: wrong,
        d: "M547.888,273.237c-4.948-6.661-32.264-15.513-81.94-26.551l-100.502-9.135l-63.953-18.273h-18.268L199.568,118.78h19.698   c4.952,0,9.234-0.428,12.85-1.287c3.617-0.859,5.424-1.952,5.424-3.284c0-1.331-1.807-2.424-5.424-3.284   c-3.616-0.855-7.898-1.285-12.85-1.285H191.86h-45.679h-18.274v9.135h18.274v118.771h-45.683l-54.818-63.954H18.274l-9.136,9.136   v54.818h9.136v9.135h36.547v2.284L0,255.818v36.546l54.821,6.851v2.283H18.274v9.13H9.139v54.823l9.136,9.134h27.406l54.818-63.954   h45.683v118.777h-18.274v9.13h18.274h45.679h27.407c4.952,0,9.234-0.425,12.85-1.28c3.617-0.862,5.424-1.954,5.424-3.288   c0-1.331-1.807-2.427-5.424-3.289c-3.616-0.855-7.898-1.28-12.85-1.28h-19.698l83.656-100.502h18.268l63.953-18.273l100.506-9.131   c54.625-12.183,82.036-21.32,82.228-27.408L547.888,273.237z"
    }];

    var avionComercial = [{
        fillOk: "Black",
        fillBad: wrong,
        d: "M365.437,35.312c-4.096-2.56-8.704-3.584-14.336-3.072c-9.728,1.536-17.92,5.12-25.6,10.752    c-6.656,5.12-14.336,11.264-23.04,18.432c-4.096,3.584-8.192,7.168-12.288,10.752c-2.56,2.56-5.12,4.608-7.68,7.168    c-2.56,2.048-4.608,3.072-7.68,2.56c-1.536-0.512-3.584-1.024-5.632-1.536l-95.744-35.84c-3.072-1.024-6.144-2.048-9.728-3.072    c-7.168-2.048-12.288,0-15.36,2.56c-5.632,4.096-10.24,9.216-13.312,14.848c-3.584,5.632-2.56,11.776,2.56,16.384    c2.048,2.048,4.096,3.584,5.632,4.608c17.408,12.288,35.328,24.064,52.736,36.352c6.656,4.608,12.8,8.704,17.408,14.336    c1.024,1.536,2.048,2.56,3.072,4.096l-33.28,31.744c-3.584,3.584-7.168,6.656-10.752,10.24c-0.512,0-1.024-0.512-1.536-0.512    l-5.632-2.56c-4.608-2.048-8.704-4.608-13.312-6.656c-5.632-2.56-11.776-2.048-16.384,2.048c-2.56,2.048-5.12,4.608-7.68,7.168    c-4.608,4.608-5.12,10.24-1.024,15.36c1.024,1.536,2.048,2.56,3.072,3.584l9.728,12.288c11.264,14.848,23.04,29.696,34.816,44.032    c1.536,2.048,3.072,3.584,5.12,4.608c2.048,1.024,6.144,3.584,11.264,2.048c6.144-2.048,10.752-6.144,12.8-12.288    c2.048-5.12,2.56-10.752,0.512-16.896l-1.024-4.608c-1.024-4.096-2.048-8.192-3.072-12.288    c13.824-10.752,27.648-20.992,40.96-31.744l6.656-5.12l1.536,2.56c3.584,5.632,6.656,11.264,8.704,17.408l23.552,60.416    c1.536,3.584,2.56,7.168,4.096,10.24c2.56,5.632,6.656,8.704,11.776,8.704c2.048,0,4.096-0.512,6.144-1.536    c1.536-0.512,3.072-1.024,4.096-2.048c8.192-4.096,13.312-9.728,15.36-17.408c1.536-6.144,1.024-11.776,0.512-15.872l-12.288-89.6    c-1.024-7.168-2.048-14.848-3.072-22.016c-0.512-3.584,0.512-5.632,3.072-7.68l10.752-9.216    c8.704-7.168,16.896-14.336,25.6-21.504c7.168-6.144,11.776-11.776,15.872-17.92c3.072-4.608,6.144-10.24,7.68-16.384    C373.629,46.576,371.069,39.408,365.437,35.312z M361.341,51.184c-1.536,5.12-4.096,9.728-6.656,13.824    c-3.072,5.12-7.68,10.24-13.824,15.36c-8.192,7.168-16.896,14.336-25.6,21.504l-10.24,8.704    c-5.632,4.096-8.192,10.24-7.168,17.408c1.024,7.168,2.048,14.336,3.072,22.016l12.288,89.6c0.512,5.12,0.512,8.704-0.512,11.776    c-1.536,4.608-4.608,8.192-9.728,10.752c-1.024,0.512-2.048,1.024-3.584,1.536c-3.072,1.024-4.096,0.512-5.12-2.048    c-1.536-3.072-2.56-6.656-4.096-10.24l-22.528-60.416c-2.56-6.656-6.144-12.8-9.728-18.944l-3.072-5.12l-4.608-6.656    l-15.872,11.776c-14.336,10.752-28.672,22.016-42.496,32.768c-3.584,2.56-3.072,5.632-2.56,7.68    c1.024,4.608,2.56,9.216,3.584,13.824l1.024,4.608c1.024,4.096,1.024,7.68-0.512,10.752c-1.536,3.072-3.584,5.12-7.168,6.144    c0,0-1.024,0-2.56-1.024c-1.024-0.512-2.048-1.536-2.56-2.56c-11.776-14.848-23.04-29.184-34.304-44.032l-9.728-12.288    c-1.024-1.024-1.536-2.048-2.56-3.584c-0.512-0.512-0.512-1.024-0.512-1.024s0.512-0.512,1.024-1.024    c2.048-2.048,4.608-4.608,6.656-6.144c1.536-1.536,3.584-1.536,5.632-0.512c4.608,2.048,8.704,4.096,13.312,6.656l5.632,2.56    c1.024,0.512,2.048,1.024,3.072,1.536c2.56,1.536,5.632,1.024,8.192-1.024c4.096-4.096,8.192-7.68,12.288-11.776l35.328-33.28    l4.096-4.096l-2.56-3.584c-0.512-1.024-1.024-1.536-1.536-2.56c-1.536-2.048-2.56-4.096-4.096-5.632    c-5.632-6.656-12.288-11.776-19.456-16.384c-17.408-11.776-35.328-24.064-52.736-36.352c-1.536-1.024-3.072-2.048-4.608-3.584    c-1.536-1.536-1.536-2.048-0.512-3.072c2.56-4.608,6.656-8.704,11.264-12.288c1.024-1.024,2.56-1.536,6.144-0.512    c3.584,1.024,6.656,2.048,9.216,3.072l95.744,35.84c2.56,1.024,5.12,1.536,7.168,2.048c5.632,1.024,11.264-0.512,15.872-4.608    c2.56-2.56,5.12-4.608,7.68-7.168c4.096-3.584,8.192-7.168,12.288-10.752c8.704-7.168,15.872-13.312,22.528-18.432    c6.144-4.608,13.312-7.68,20.992-8.704c2.56-0.512,4.608,0,6.656,1.024C361.341,45.04,362.365,48.112,361.341,51.184z"
    }];



    /**
     * chart
     * Se crean los SVG asociados a cada seccion #vis
     */
    var chart = function (selection) {
        selection.each(function (rutas, aerolineas, aviones, aeropuertos) {

            svg1 = d3.select('#vis1')
                .append('svg')
                .attr('width', 2 * width + margin.left + margin.right)
                .attr('height', height / 2 + margin.top + margin.bottom);

            g1 = svg1.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


            svg2 = d3.select('#vis2')


            g2 = svg2.append('g')


            svg3 = d3.select('#vis3')


            g3 = svg3.append('g')


            svg4 = d3.select('#vis4')


            g4 = svg4.append('g')

            svg5 = d3.select('#vis5')


            g5 = svg5.append('g')
            setupSections();
        });
    };

    /**
     * setupSections
     * Cada seccion se activa mediante una funcion. 
     * Aqui es donde se asocia la funcion con el indice
     */
    var setupSections = function () {
        // Cada vez que la seccion activa cambia se llama a activateFunctions
        activateFunctions[0] = dontShow;
        activateFunctions[1] = showAircrafTakeOff;
        activateFunctions[2] = showFirsFlight;
        activateFunctions[3] = showMapAirport;
        activateFunctions[4] = showMapAerolineas;
        activateFunctions[5] = deleteg;
    };

    /**
     * dontShow - Seccion en blanco
     */
    function dontShow() {
        g1.remove();
    };

    /**
     * showAircrafTakeOff - Seccion de que muestra los svg de los aviones despegando
     */
    function showAircrafTakeOff() {

        // Elimina seccion posterior


        // Se crea el grupo correspondiente
        g1 = svg1.append('g')
            .attr('transform', 'translate(' + margin.right + ',' + margin.top + ')');

        // Transiciones
        var time = 3000
        var delayTime = 500

        // Simbolos

        var svgavionPapel = g1
            .append('path')
            .attr('class', 'system')
            .attr("transform", 'translate(-100,240) scale(1, 1)')
            .attr("opacity", 0)
            .attr("d", avionpapel[0].d)
            .style("fill", avionpapel[0].fillOk)
            .transition()
            .duration(time)
            .attr("transform", 'translate(' + 1000 + ',0) scale(2, 2)')
            .attr("opacity", 2)

        var svgavionAeroplano = g1
            .append('path')
            .attr('class', 'system')
            .attr("transform", 'translate(-100,240) scale(0, 0)')
            .attr("opacity", 0)
            .attr("d", avionAeroplano[0].d)
            .style("fill", avionAeroplano[0].fillOk)
            .transition()
            .duration(2 * time)
            .attr("transform", 'translate(' + 1000 + ',0) scale(1, 1)')
            .attr("opacity", 2)

        var svgavionHelice = g1
            .append('path')
            .attr('class', 'system')
            .attr("transform", 'translate(-100,240)  scale(-1, 1)')
            .attr("d", avionelice[0].d)
            .style("fill", avionelice[0].fillOk)
            .transition()
            .delay(4 * delayTime)
            .duration(time)
            .attr("transform", 'translate(' + 800 + ',0) scale(0, 0)')
            .style("opacity", 1)


        var svgavionComercial = g1
            .append('path')
            .attr('class', 'system')
            .attr("transform", 'translate(-400,240) scale(1, 1)')
            .attr("d", avionComercial[0].d)
            .style("fill", avionComercial[0].fillOk)
            .transition()
            .delay(6 * delayTime)
            .duration(time)
            .attr("transform", 'translate(' + 900 + ',0) scale(0, 0)')
            .style("opacity", 1)

        var svgavionCaza = g1
            .append('path')
            .attr('class', 'system')
            .attr("transform", 'translate(-800,0) scale(1, 1)')
            .attr("d", avioncaza[0].d)
            .style("fill", avioncaza[0].fillOk)
            .transition()
            .delay(8 * delayTime)
            .duration(time)
            .attr("transform", 'translate(' + 900 + ',0) scale(0, 0)')
            .style("opacity", 1)

        /**
        var svgBrake = g1
        		.append('path')
              .attr('class', 'system')
              .attr("transform", 'translate(250,30) scale(1, 1)')
              .attr("opacity",0)
        		.attr("d", brake[0].d)
        		.style("fill", brake[0].fillOk)
              .transition()
                  .delay(time+delayTime)
                  .duration(2*delayTime)
              .attr("transform", 'translate(' + (width+90) + ',' +  150 + ') scale(1, 1)')
              .attr("opacity",1)
          
        var svgsparkPlug = g1
        		.append('path')
              .attr('class', 'system')
              .attr("transform", 'translate(250,30) scale(1, 1)')
              .attr("opacity",0)
        		.attr("d", sparkPlug[0].d)
        		.style("fill", sparkPlug[0].fillOk)
              .transition()
                  .delay(time+delayTime)
                  .duration(2*delayTime)
              .attr("transform", 'translate(' + (width-60) + ',' +  150 + ') scale(1, 1)')
              .attr("opacity",1)
              */
    };
    /**
     * showFirsFlight - Seccion que muestra el primer vuelo comercial
     *
     */
    function showFirsFlight() {
        // Elimina el mapa si estaba inicializado
        if (g2 != null) {
            g2.remove();
        }
        g1.remove();

        //Creamos el mapa
        g2 = L.map('mapPrimerVuelo').setView([39.983333, -82.983333], 8);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            minZoom: 0.3,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.outdoors'
        }).addTo(g2);



        //Damos estilo a la linea creada 
        var dash_straight = {
            color: 'rgb(0, 0, 0)',
            fillColor: 'rgb(145, 146, 150)',
            dashArray: 8,
            opacity: 0.8,
            weight: '1',
        };
        
        //Creamos la animacion de Dayton a Columbus 
        L.bezier({
            path: [
            [
                    {
                        lat: 39.766667,
                        lng: -84.2
                    }, //Dayton
                    {
                        lat: 39.983333,
                        lng: -82.983333
                    }, //Columbus 
            ]
        ],
            //Seleccionamos el icono para nuestra animación
            icon: {
                path: "./images/airplane.png" 
            }
        }, dash_straight).addTo(g2);
    }
    /**
     * showMapAirport - Seccion que muestra los aeropuertos por paises
     *
     */
    function showMapAirport() {

        // Elimina el mapa si estubiera inicializado
        if (g3 != null) {
            g3.remove();
        }
        //Declaramos variables 
        var paisesAero;

        var puertoF = aeropuertos;

        var filtro = puertoF.dimension(function (d) {
            return d.pais;
        });

        var paises = filtro.group();
        paisesAero = paises_con_Aeropuerto(paises);

        // Se crea el mapa para la seccion g3 

        g3 = L.map('mapAeropuerto').setView([40.889815, 0.023551], 1.6);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            minZoom: 0.3,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.outdoors'
        }).addTo(g3);


        // control that shows state info on hover
        var info = L.control();

        info.onAdd = function (g3) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };

        info.update = function (props) {
            //        console.log(paisesAero);
            //console.log(props);
            var result;
            var numero;
            if (props != undefined) { //Carga paises
                result = paisesAero.find(obj => {
                    return obj.key === props.name
                })
            }
            if (result == null) { //No ha podido cargar pais 
                numero = -1;
            } else {
                numero = result.value;
            }
            //        console.log(result);
            this._div.innerHTML = '<h4>Mapamundi</h4>' + (props ?
                '<b>' + props.name + '</b><br /> Numero Aeropuertos: ' + numero :
                'Sitúa el ratón en un pais');
        };

        info.addTo(g3);


        // get color depending on population density value
        function getColor(d) {
            return d > 400 ? '#800026' :
                d > 200 ? '#FD8D3C' :
                d > 100 ? '#BD0026' :
                d > 40 ? '#FC4E2A' :
                d > 20 ? '#FD8D3C' :
                d > 10 ? '#FEB24C' :
                d < 0 ? '#717171' :
                '#FFEDA0';
        }
        //Estilo del borde de las provs :D
        function style(jsonAeropuertos) {
            //        JSON.stringify(jsonAeropuertos);
            //console.log(jsonAeropuertos);
            var result;
            var color
            result = paisesAero.find(obj => {
                return obj.key === jsonAeropuertos.properties.name
            })
            //        console.log(result);
            if (result == null) {
                //            console.log("hola");
                color = getColor(-1);
            } else {
                color = getColor(result.value);
            }

            //        console.log(result);
            return {
                weight: 2,
                opacity: 1,
                color: 'purple',
                dashArray: '5',
                //Relleno de las provs
                fillOpacity: 0.8,

                //PRUEBAS
                //fillColor: getColor(jsonCasos.casos)
                fillColor: color
            };
        }
        //Color del borde en función de donde este el ratón
        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#000',
                dashArray: '',
                fillOpacity: 0.7
            });

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }

            info.update(layer.feature.properties);
        }

        var geojson;

        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
        }

        function zoomToFeature(e) {
            g3.fitBounds(e.target.getBounds());
            
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            });
        }

        // load GeoJSON from an external file
        $.getJSON("./js/Mapa/paises.json", function (data) {
            //       console.log(paisesAero);
            geojson = L.geoJson(data, {
                style: style,
                jsonAeropuertos: paisesAero,
                onEachFeature: onEachFeature
            }).addTo(g3);
        });

        g3.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');

        //Create de legend of the map
        var legend = L.control({
            position: 'bottomright'
        });

        legend.onAdd = function (g3) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [-1, 0, 10, 20, 40, 100, 200, 400],
                labels = [],
                from, to;
            labels.push('Codigo Aeropuertos: ');
            for (var i = 0; i < grades.length; i++) {

                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor(grades[i]) + '"> </i> ' +
                    from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };

        legend.addTo(g3);

        function paises_con_Aeropuerto(filter) {
            var f = eval(filter);
            if (typeof (f.length) != "undefined") {} else {}
            if (typeof (f.top) != "undefined") {
                f = f.top(Infinity);
            } else {}
            if (typeof (f.dimension) != "undefined") {
                f = f.dimension(function (d) {
                    return "";
                }).top(Infinity);
            } else {}
            //    console.log("Aqui va:");
            paisesAero = JSON.stringify(f).replace("[", "[\n\t").replace(/}\,/g, "},\n\t").replace("]", "\n]");
            //    console.log(paisesAero);
            paisesAero = JSON.parse(paisesAero);
            return paisesAero;
            //console.log(paisesAero);

        }

    };

    /**
     * showMapAerolineas - Seccion que muestra las aerolineas por paises 
     *
     */
    function showMapAerolineas() {

        // Elimina el mapa de la seccion g4 si estubiera creado
        if (g4 != null) {
            g4.remove();
        }



        // Definimos variables 
        var paisesAerolinea;

        var aerolineF = aerolineas;

        //Filtramos por aerolinea activa 
        var filtro2 = aerolineF.dimension(function (d) {
            if (d.activo == "Y") {
                return d.pais;
            } else return "";
        });

        var paises = filtro2.group();

        paisesAerolinea = paises_con_Aerolinea(paises);

        // Se crea el mapa para la seccion g4

        g4 = L.map('mapAerolineas').setView([40.889815, 0.023551], 1.6);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            minZoom: 0.3,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.outdoors'
        }).addTo(g4);


        // control that shows state info on hover
        var info = L.control();

        info.onAdd = function (g4) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };

        info.update = function (props) {
            //        console.log(paisesAero);
            //console.log(props);
            var result;
            var numero;
            if (props != undefined) { //Carga paises
                result = paisesAerolinea.find(obj => {
                    return obj.key === props.name
                })
            }
            if (result == null) { //No ha podido cargar pais 
                numero = -1;
            } else {
                numero = result.value;
            }
            //        console.log(result);
            this._div.innerHTML = '<h4>Mapamundi</h4>' + (props ?
                '<b>' + props.name + '</b><br /> Numero Aerolineas: ' + numero :
                'Sitúa el ratón en un pais');
        };

        info.addTo(g4);


        // get color depending on population density value
        function getColor(d) {
            return d > 30 ? '#800026' :
                d > 25 ? '#FD8D3C' :
                d > 20 ? '#BD0026' :
                d > 15 ? '#FC4E2A' :
                d > 10 ? '#FD8D3C' :
                d > 5 ? '#FEB24C' :
                d < 0 ? '#717171' :
                '#FFEDA0';
        }
        //Estilo del borde de las provs :D
        function style(jsonAeropuertos) {
            //        JSON.stringify(jsonAeropuertos);
            //console.log(jsonAeropuertos);
            var result;
            var color
            result = paisesAerolinea.find(obj => {
                return obj.key === jsonAeropuertos.properties.name
            })
            //        console.log(result);
            if (result == null) {
                //            console.log("hola");
                color = getColor(-1);
            } else {
                color = getColor(result.value);
            }

            //        console.log(result);
            return {
                weight: 2,
                opacity: 1,
                color: 'purple',
                dashArray: '5',
                //Relleno de las provs
                fillOpacity: 0.8,

                //PRUEBAS
                //fillColor: getColor(jsonCasos.casos)
                fillColor: color
            };
        }
        //Color del borde en función de donde este el ratón
        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#000',
                dashArray: '',
                fillOpacity: 0.7
            });

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }

            info.update(layer.feature.properties);
        }

        var geojson;

        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
        }

        function zoomToFeature(e) {
            g4.fitBounds(e.target.getBounds());
            /*console.log(e.target.getBounds());
             map.setView(e.target.getBounds(), 13);
             */
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            });
        }

        // load GeoJSON from an external file
        $.getJSON("./js/Mapa/paises.json", function (data) {
            //       console.log(paisesAero);
            geojson = L.geoJson(data, {
                style: style,
                jsonAeropuertos: paisesAerolinea,
                onEachFeature: onEachFeature
            }).addTo(g4);
        });

        g4.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');


        var legend = L.control({
            position: 'bottomright'
        });

        legend.onAdd = function (g4) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [-1, 0, 5, 10, 15, 20, 25, 30],
                labels = [],
                from, to;
            labels.push('Codigo Aeropuertos: ');
            for (var i = 0; i < grades.length; i++) {

                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor(grades[i]) + '"> </i> ' +
                    from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };

        legend.addTo(g4);

        function paises_con_Aerolinea(filter) {
            var f = eval(filter);
            if (typeof (f.length) != "undefined") {} else {}
            if (typeof (f.top) != "undefined") {
                f = f.top(Infinity);
            } else {}
            if (typeof (f.dimension) != "undefined") {
                f = f.dimension(function (d) {
                    return "";
                }).top(Infinity);
            } else {}
            //    console.log("Aqui va:");
            paisesAerolinea = JSON.stringify(f).replace("[", "[\n\t").replace(/}\,/g, "},\n\t").replace("]", "\n]");
            //console.log(paisesAerolinea);
            paisesAerolinea = JSON.parse(paisesAerolinea);
            return paisesAerolinea;
            //console.log(paisesAero);

        }

    };


    /**
     * deleteg - Borra el grupo de la ultima seccion
     */
    function deleteg() {
        g4.remove();
    };

    /**
     * activate - Activa cada funcion segun el indice
     */
    chart.activate = function (index) {
        activeIndex = index;
        var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
        var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
        scrolledSections.forEach(function (i) {
            activateFunctions[i]();
        });
        lastIndex = activeIndex;
    };

    return chart;
};

//////////////////////////////////////////////////////////////////////////
// display
// Funcion de paso una vez cargados los datos del csv llamamos a dicha funcion la cual llamarla al scrollvis para cargar los diferentes datos de la seccion que estemos visualizando
//////////////////////////////////////////////////////////////////////////

function display(rutas, aerolineas, aviones, aeropuertos) {

    // Se llama a la funcion scrollVis que es la encargada de generar los graficos de

    var plot = scrollVis(rutas, aerolineas, aviones, aeropuertos);
    d3.select('#vis1')
        .call(plot);

    // Configuracion del scroller

    var scroll = scroller()
        .container(d3.select('#graphic'));

    scroll(d3.selectAll('.step'));

    scroll.on('active', function (index) {
        d3.selectAll('.step')
            .style('opacity', function (d, i) {
                return i === index ? 1 : 0.1;
            });
        plot.activate(index);
    });
}

//////////////////////////////////////////////////////////////////////////
// visdashboard
// Funcion para visualizar el dashbord, en dicho dasbor podemos visualizar un mapa interactivo, realizando un click en el mapa podremos visualizar los aeropuertos, aerolineas y rutas del pais sellecionado
//////////////////////////////////////////////////////////////////////////

function visdashboard(aeropuertosF, avionF, aerolineasF, rutaF) {

    var width = 230;
    var height = 230;

    


    /**
    print_filter->Limpia el crossfilter
    */
    function print_filter(filter) {
        var f = eval(filter);
        if (typeof (f.length) != "undefined") {} else {}
        if (typeof (f.top) != "undefined") {
            f = f.top(Infinity);
        } else {}
        if (typeof (f.dimension) != "undefined") {
            f = f.dimension(function (d) {
                return "";
            }).top(Infinity);
        } else {}
        //    console.log("Aqui va:");
        return f;
    }
    /**
    puertosPais->A partir de un nombre de un pais muestra todos los aeropuertos de dicho pais 
    */
    function puertosPais(busqueda, puertoF) {
        var filtro = puertoF.dimension(function (d) {
            return d.pais;
        });
        var filtrado = print_filter(filtro.filter(busqueda));
        filtro.filterAll();
        //reseteo del crossfilter

        return filtrado;
    }

    //Declaracion de varibles 
    var paisesAero;

    var puertoF = aeropuertosF;
    //Filtro de aeropuerto por paises 
    var filtro = puertoF.dimension(function (d) {
        return d.pais;
    });
    var paises = filtro.group();
    paisesAero = paises_con_Aeropuerto(paises);
    
    //Mapa aeropuerto
    mapaDasbord = L.map('mapAeropuertoDash').setView([40.889815, 0.023551], 1.6);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        minZoom: 0.3,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.outdoors'
    }).addTo(mapaDasbord);


    // control that shows state info on hover
    var info = L.control();

    info.onAdd = function (mapaDasbord) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };

    info.update = function (props) {
        //        console.log(paisesAero);
        //console.log(props);
        var result;
        var numero;
        if (props != undefined) { //Carga paises
            result = paisesAero.find(obj => {
                return obj.key === props.name
            })
        }
        if (result == null) { //No ha podido cargar pais 
            numero = -1;
        } else {
            numero = result.value;
        }
        //        console.log(result);
        this._div.innerHTML = '<h4>Mapamundi</h4>' + (props ?
            '<b>' + props.name + '</b><br /> Numero Aeropuertos: ' + numero :
            'Sitúa el ratón en un pais');
    };

    info.addTo(mapaDasbord);


    // get color depending on population density value
    function getColor(d) {
        return d > 400 ? '#800026' :
            d > 200 ? '#FD8D3C' :
            d > 100 ? '#BD0026' :
            d > 40 ? '#FC4E2A' :
            d > 20 ? '#FD8D3C' :
            d > 10 ? '#FEB24C' :
            d < 0 ? '#717171' :
            '#FFEDA0';
    }
    //Estilo del borde de las provs :D
    function style(jsonAeropuertos) {
        //        JSON.stringify(jsonAeropuertos);
        //console.log(jsonAeropuertos);
        var result;
        var color
        result = paisesAero.find(obj => {
            return obj.key === jsonAeropuertos.properties.name
        })
        //        console.log(result);
        if (result == null) {
            //            console.log("hola");
            color = getColor(-1);
        } else {
            color = getColor(result.value);
        }

        //        console.log(result);
        return {
            weight: 2,
            opacity: 1,
            color: 'purple',
            dashArray: '5',
            //Relleno de las provs
            fillOpacity: 0.8,

            //PRUEBAS
            //fillColor: getColor(jsonCasos.casos)
            fillColor: color
        };
    }
    //Color del borde en función de donde este el ratón
    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#000',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }

        info.update(layer.feature.properties);
    }

    var geojson;

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }
    /**
    companiaPais->A partir de un nombre de un pais muestra todos las aerolineas de dicho pais 
    */
    function companiaPais(busqueda, aeroF) {
        var filtro = aeroF.dimension(function (d) {
            return d.pais;
        });
        var nueva = filtro.filter(busqueda);
        var filtroFinal = print_filter(nueva);
        filtro.filterAll();
        return filtroFinal;
    }
    /**
    cargarerolineas-> Carga los datos de la tabla de aerolineas y piechar de aerolineas 
    */
    function cargarerolineas(aerolineasF, pais) {
        //AEROLINEAS
        // Alimentar el Crossfilter
        var arolineasPais = companiaPais(pais, aerolineasF);
        var dataaerolineas = crossfilter(arolineasPais);
        d3.select("#tituloAerolineas :first-child").remove();
        var tituloNumAeropuerto = d3.select("#tituloAerolineas").append("h1");
        tituloNumAeropuerto.text("Número de aerolineas en " + pais + "  es: " + dataaerolineas.size())
        var alldataaerolineas = dataaerolineas.dimension(function (d) {
            return d
        });
        var dataPiechar = [
            {
                'Expt': 1,
                'Total': dataaerolineas.size(),
                'Aeropuertos': 'Aeropuertos de ' + pais
            },
            {
                'Expt': 1,
                'Total': aerolineasF.size(),
                'Aeropuertos': 'Total de aerolineas ' + aerolineasF.size()
            }
];
        console.log(dataPiechar)
        var ndx = crossfilter(dataPiechar),
            runDimension = ndx.dimension(function (d) {
                return d.Aeropuertos;
            });
        totalSumGroup = runDimension.group().reduceSum(function (d) {
            return d.Total;
        });
        var pieCriAerolinea = dc.pieChart("#criPieAerolineas")

        // Resultados (diagramas de tarta y numericos)
        pieCriAerolinea
            .width(160)
            .height(160)
            .innerRadius(20)
            .dimension(runDimension)
            .group(totalSumGroup)
            .ordinalColors(['rgba(204,204,204,0.8)', 'rgba(70, 130, 180)'])
            .minAngleForLabel(0.01)
            .on('pretransition', function (chart) {
                chart.selectAll('text.pie-slice').text(function (d) {
                    /*                    return d3.select(this).text() && (d.data.key + ' ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%');*/
                    return d3.select(this).text();
                })
            });

        pieCriAerolinea.render();


        pieCriAerolinea.onClick = function () {}; // Desactivar seleccion
        //var alltable=table.dimension(function(d){return d;});



        // Tabla ACR
        tableChartAerolinea = dc.dataTable("#dc-table-aerolineas");




        // Escalas de colores
        var colorScaleCri = {
            "1": "#6FA84B",
            "2": "#6FA84B",
            "3": "#6FA84B",
            "4": "#6FA84B",
            "5": "#34B5AA",
            "6": "#34B5AA",
            "8": "#F9D422",
            "9": "#F9D422",
            "10": "#F9D422",
            "12": "#F9D422",
            "15": "#F28F3F",
            "16": "#F28F3F",
            "20": "#E94F53",
            "25": "#E94F53"
        };

        var colorScaleProb = {
            "1": "#C8E5E3",
            "2": "#A3D5D1",
            "3": "#80C9C6",
            "4": "#44B4C4",
            "5": "#1792A4"
        };

        /* 
         * Creacion de los elementos
         */

        // Tabla paginada ACR   
        var ofs1 = 0,
            pag1 = 10;

        function display() {
            d3.select('#beginAerolinea')
                .text(ofs1 + 1);
            d3.select('#endAerolinea')
                .text(ofs1 + pag1);
            d3.select('#lastAerolinea')
                .attr('disabled', ofs1 - pag1 < 0 ? 'true' : null);
            d3.select('#nextAerolinea')
                .attr('disabled', ofs1 + pag1 >= dataaerolineas.size() ? 'true' : null);
            d3.select('#sizeAerolinea').text(dataaerolineas.size());
        }

        function updateAerolinea() {
            tableChartAerolinea.beginSlice(ofs1);
            tableChartAerolinea.endSlice(ofs1 + pag1);
            display();
        }

        tableChartAerolinea
            .dimension(alldataaerolineas)
            .group(function (d) {
                return ""
            })
            .size(Infinity)
            .columns([
            function (d) {
                    return d.nombre
            },
            function (d) {
                    return d.activo
            },
            function (d) {
                    return d.IATA
            },
            function (d) {
                    return d.ICAO
            }

        ])
            .sortBy(function (d) {
                return d.nombre;
            })
            .order(d3.ascending);

        updateAerolinea();

        d3.select('#lastAerolinea')
            .on('click', function last() {
                ofs1 -= pag1;
                updateAerolinea();
                tableChartAerolinea.redraw();
            })

        d3.select('#nextAerolinea')
            .on('click', function last() {
                ofs1 += pag1;
                updateAerolinea();
                tableChartAerolinea.redraw();
            })

        dc.renderAll();
    }
    /**
    SalDest->filtrat de un pais todos las rutas de dicho pais como aeropuerto de salida
    */
    function SalDest(busqueda, rutaF) {
        //console.log(openF);
        var filtro = rutaF.dimension(function (d) {
            return d.sourceCountry;
        });
        var nueva = filtro.filter(busqueda);
        var filtroFinal = print_filter(nueva);
        //console.log(filtroFinal);
        filtro.filterAll();

        return filtroFinal;
    }
    /**
    mapaSalidaDestino->A partir de un nombre de un pais muestra todos las rutas de dicho pais como aeropuerto de salida
    */
    function mapaSalidaDestino(pais,rutaF){
        var latlogmap =[];
        
        var saldest = (SalDest(pais, rutaF));
        d3.select("#titulomapaSalida :first-child").remove();
        var tituloNumAeropuerto = d3.select("#titulomapaSalida").append("h1");
        tituloNumAeropuerto.text("Las rutas entre "+pais+ " y el mundo son: "+saldest.length);
        
        saldest.forEach(function (d){
            
             latlogmap.push([{
                        lat: parseFloat(d.sourceLatitude),
                        lng: parseFloat(d.sourceLongitude)
                    },
                {
                        lat: parseFloat(d.destinationLatitude),
                        lng: parseFloat(d.destinationLongitude)
                    }]);
        ;
        });
        
        
        $( "#mapSalidallegadas" ).append('<div id="mapSalidallegada" style="width: 800px; height: 500px;">');
         mapa = L.map('mapSalidallegada').setView([latlogmap[0][0].lat, latlogmap[0][0].lng], 3);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            minZoom: 0.3,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.light'
        }).addTo(mapa);

        var dash_straight = {
            color: 'rgb(128, 0, 38)',
            fillColor: 'rgb(145, 146, 150)',
            weight: '0.7',
        };
    
        L.bezier({
        path: latlogmap,
        icon: {  
        }
    }, dash_straight).addTo(mapa);
     
    }
    /**
    clickToFeature->Encargado de gestionar los click del mapa y cargar la informacion en el html acorde con el pais seleccionado
    */
    function clickToFeature(e) {
        //console.log(e.target.feature.properties);
        /**
         map.setView(e.target.getBounds(), 13);
         */
        //AEROPUERTOS
        // Alimentar el Crossfilter
        var aropuertoPais = puertosPais(e.target.feature.properties.name, aeropuertosF);
        //console.log(aropuertoPais);
        var rutasPais;
        
        var data = crossfilter(aropuertoPais);
        d3.select("#tituloAeropuerto :first-child").remove();
        
        var tituloNumAeropuerto = d3.select("#tituloAeropuerto").append("h1");
        tituloNumAeropuerto.text("Número de aeropuertos en " + e.target.feature.properties.name + "  es: " + data.size())
        var alldata = data.dimension(function (d) {
            return d
        });
        var dataPiechar = [
            {
                'Expt': 1,
                'Total': data.size(),
                'Aeropuertos': 'Aeropuertos de ' + e.target.feature.properties.name
            },
            {
                'Expt': 1,
                'Total': aeropuertosF.size(),
                'Aeropuertos': 'Total de aeropuertos ' + aeropuertosF.size()
            }
];
        console.log(dataPiechar)
        var ndx = crossfilter(dataPiechar),
            runDimension = ndx.dimension(function (d) {
                return d.Aeropuertos;
            });
        totalSumGroup = runDimension.group().reduceSum(function (d) {
            return d.Total;
        });
        var pieCriAeropuerto = dc.pieChart("#criPieAeropuerto")

        // Resultados (diagramas de tarta y numericos)
        pieCriAeropuerto
            .width(160)
            .height(160)
            .innerRadius(20)
            .dimension(runDimension)
            .group(totalSumGroup)
            .ordinalColors(['rgba(204,204,204,0.8)', 'rgba(70, 130, 180)'])
            .minAngleForLabel(0.01)
            .on('pretransition', function (chart) {
                chart.selectAll('text.pie-slice').text(function (d) {
                    /*                    return d3.select(this).text() && (d.data.key + ' ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%');*/
                    return d3.select(this).text();
                })
            });

        pieCriAeropuerto.render();


        pieCriAeropuerto.onClick = function () {}; // Desactivar seleccion
        //var alltable=table.dimension(function(d){return d;});



        // Tabla ACR
        tableChartAeropuerto = dc.dataTable("#dc-table-aeropuertos")




        // Escalas de colores
        var colorScaleCri = {
            "1": "#6FA84B",
            "2": "#6FA84B",
            "3": "#6FA84B",
            "4": "#6FA84B",
            "5": "#34B5AA",
            "6": "#34B5AA",
            "8": "#F9D422",
            "9": "#F9D422",
            "10": "#F9D422",
            "12": "#F9D422",
            "15": "#F28F3F",
            "16": "#F28F3F",
            "20": "#E94F53",
            "25": "#E94F53"
        };

        var colorScaleProb = {
            "1": "#C8E5E3",
            "2": "#A3D5D1",
            "3": "#80C9C6",
            "4": "#44B4C4",
            "5": "#1792A4"
        };

        /* 
         * Creacion de los elementos
         */

        // Tabla paginada ACR   
        var ofs = 0,
            pag = 10;

        function display() {
            d3.select('#begin')
                .text(ofs + 1);
            d3.select('#end')
                .text(ofs + pag);
            d3.select('#last')
                .attr('disabled', ofs - pag < 0 ? 'true' : null);
            d3.select('#next')
                .attr('disabled', ofs + pag >= data.size() ? 'true' : null);
            d3.select('#size').text(data.size());
        }

        function updateAeropuerto() {
            tableChartAeropuerto.beginSlice(ofs);
            tableChartAeropuerto.endSlice(ofs + pag);
            display();
        }

        tableChartAeropuerto
            .dimension(alldata)
            .group(function (d) {
                return ""
            })
            .size(Infinity)
            .columns([
            function (d) {
                    return d.nombre
            },
            function (d) {
                    return d.ciudad
            },
            function (d) {
                    return d.IATA
            },
            function (d) {
                    return d.ICAO
            }

        ])
            .sortBy(function (d) {
                return d.nombre;
            })
            .order(d3.ascending);

        updateAeropuerto();

        d3.select('#last')
            .on('click', function last() {
                ofs -= pag;
                updateAeropuerto();
                tableChartAeropuerto.redraw();
            })

        d3.select('#next')
            .on('click', function last() {
                ofs += pag;
                updateAeropuerto();
                tableChartAeropuerto.redraw();
            })
        dc.renderAll();


        cargarerolineas(aerolineasF, e.target.feature.properties.name);
        $( "#mapSalidallegada" ).remove();
        mapaSalidaDestino(e.target.feature.properties.name,rutaF);
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: clickToFeature
        });
    }

    // load GeoJSON from an external file
    $.getJSON("./js/Mapa/paises.json", function (data) {
        //       console.log(paisesAero);
        geojson = L.geoJson(data, {
            style: style,
            jsonAeropuertos: paisesAero,
            onEachFeature: onEachFeature
        }).addTo(mapaDasbord);
    });

    mapaDasbord.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');


    var legend = L.control({
        position: 'bottomright'
    });

    legend.onAdd = function (mapaDasbord) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [-1, 0, 10, 20, 40, 100, 200, 400],
            labels = [],
            from, to;
        labels.push('Codigo Aeropuertos: ');
        for (var i = 0; i < grades.length; i++) {

            from = grades[i];
            to = grades[i + 1];

            labels.push(
                '<i style="background:' + getColor(grades[i]) + '"> </i> ' +
                from + (to ? '&ndash;' + to : '+'));
        }

        div.innerHTML = labels.join('<br>');
        return div;
    };

    legend.addTo(mapaDasbord);

    function paises_con_Aeropuerto(filter) {
        var f = eval(filter);
        if (typeof (f.length) != "undefined") {} else {}
        if (typeof (f.top) != "undefined") {
            f = f.top(Infinity);
        } else {}
        if (typeof (f.dimension) != "undefined") {
            f = f.dimension(function (d) {
                return "";
            }).top(Infinity);
        } else {}
        //    console.log("Aqui va:");
        paisesAero = JSON.stringify(f).replace("[", "[\n\t").replace(/}\,/g, "},\n\t").replace("]", "\n]");
        //    console.log(paisesAero);
        paisesAero = JSON.parse(paisesAero);
        return paisesAero;
        //console.log(paisesAero);

    }


};

//////////////////////////////////////////////////////////////////////////
// Carga de datos y llamada a las visualizaciones
//////////////////////////////////////////////////////////////////////////

d3.queue()
    .defer(d3.csv, './data/rutas.csv')
    .defer(d3.csv, './data/aerolineas.csv')
    .defer(d3.csv, './data/aviones.csv')
    .defer(d3.csv, './data/aeropuertos.csv')
    .await(function (error, rutas, aerolineas, aviones, aeropuertos) {
        if (error) {
            console.error('Something went wrong: ', error);
        } else {
            var rutaF = crossfilter(rutas);
            var aerolineasF = crossfilter(aerolineas);
            var avionF = crossfilter(aviones);
            var aeropuertosF = crossfilter(aeropuertos);
            display(rutaF, aerolineasF, avionF, aeropuertosF);
            visdashboard(aeropuertosF, avionF, aerolineasF, rutaF);
        }
    });
