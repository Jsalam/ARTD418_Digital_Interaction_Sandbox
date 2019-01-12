var preloadedImg = [];
					var start = 1;
					var end = 9;
					var prefix = "mix/72/animation-0" 
					for(var i=start; i<= end; i++){
						var tempImg = new Image();
						tempImg.src = prefix.concat(i)+" copy.png";
						preloadedImg.push(tempImg);
					}
					start = 10;
					end = 75;
					prefix = "mix/72/animation-" 
					for(var i=start; i<= end; i++){
						var tempImg = new Image();
						tempImg.src = prefix.concat(i)+" copy.png";
						preloadedImg.push(tempImg);
					}// JavaScript Document