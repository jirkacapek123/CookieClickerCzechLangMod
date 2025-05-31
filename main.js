Game.registerMod("testing",{
	init: function() {
		let MOD=this;
		MOD.prefs=[];
		
		var formatLong=[' tisíc',' miliónů',' miliard',' bilionů',' biliard',' Trillionen',' Trilliarden',' quadrilionů',' quadriliard',' quintilionů',' Quintilliarden',' sextilionů',' sextiliard',' septilionů',' Septilliarden',' oktilionů',' oktiliard',' nonilionů',' noniliard'];
		var prefixes=['','un','duo','tre','Quattuor','Quin','Sex','Septen','Okti','Novem']; //Einer
		var infixes=['deci','viginti','triginti','quadraginti','quinquaginti','sexaginti','septuaginti','otoginti','nonaginti']; //Zehner klein
		var suffixes=['lionů','liard']; //přípona
		//Override format for long number names
		for (var i in infixes)
		{
			for (var ii in prefixes)
			{
				for (var iii in suffixes)
				{
					{
						formatLong.push(' '+prefixes[ii]+infixes[i]+suffixes[iii]);
					}
				}
			}
		}
		
				formatShort[10]='Dc';
		
		//For some reason this needs to be copied from the main.js
		var numberFormatters=
		[
			formatEveryThirdPower(formatShort),
			formatEveryThirdPower(formatLong),
			rawFormatter
		];
		
		//Override Beautify for the short format Option and the thousand (dot) and decimal (comma) seperators
		Beautify=function(val,floats)
		{
			var negative=(val<0);
			var decimal='';
			var fixed=val.toFixed(floats);
			if (floats>0 && Math.abs(val)<1000 && Math.floor(fixed)!=fixed) decimal=','+(fixed.toString()).split('.')[1];
			val=Math.floor(Math.abs(val));
			if (floats>0 && fixed==val+1) val++;
			//var format=!EN?2:Game.prefs.format?2:1;
			var format=Game.prefs.format?2:0;
			var shortFormat=format?0:MOD.prefs.short?0:1;
			var formatter=numberFormatters[format+shortFormat];
			var output=(val.toString().indexOf('e+')!=-1 && format==2)?val.toPrecision(3).toString():formatter(val).toString()
			output=output.replace('.',',');
			output=output.replace(/\B(?=(\d{3})+(?!\d))/g,'.');
			//var output=formatter(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
			if (output=='0') negative=false;
			return negative?'-'+output:output+decimal;
		}
		
		//Override to add Dots as thousand seperators
		SimpleBeautify=function(val)
		{
			var str=val.toString();
			var str2='';
			for (var i in str)//add dots
			{
				if ((str.length-i)%3==0 && i>0) str2+='.';
				str2+=str[i];
			}
			return str2;
		}
		
		drawCookieAmount = function(){
			if (!Game.OnAscend){	
				
				var str=Beautify(Math.round(Game.cookiesd));
				if (Game.cookiesd>=1000000)//dirty padding
				{
					var decPos=str.indexOf(',');
					var decAmount=(decPos!=-1)?str.match(/(?<=,)\d*/)[0].length:0;
					var nrmAmount=str.match(/(([\d]+[.]*)+)/)[0].length;
					//thousands position so that long scale doesn't have too many digits
					var thsPos=str.lastIndexOf('.');
					var add='';
					if (thsPos==-1)
					{
						if (decAmount==0) add+=',000';
						else
						{
							if (decAmount==1) add+='00';
							if (decAmount==2) add+='0';
						}
					}
					str=[str.slice(0,(decPos!=-1)?nrmAmount+decAmount+1:nrmAmount+1),add,str.slice((decPos!=-1)?nrmAmount+decAmount+1:nrmAmount+1)].join('');
				}
				
				str=loc("%1 cookie",{n:Math.round(Game.cookiesd),b:str});
				if (str.length>14) str=str.replace(' ','<br>');
				
				if (Game.prefs.monospace) str='<span class="monospace">'+str+'</span>';
				str+=l('cookiesPerSecond').outerHTML;
				l('cookies').innerHTML=str;
				Timer.track('cookie amount(mod)');
		}}
		//Add Hook
		Game.registerHook('draw', drawCookieAmount);
		
	},

		
		
//var locPlur='nplurals=3;plural=(n>=2 &^ n<=4) ? 1 : 2;';//see http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html
	save:function(){
		return String(this.prefs.short*1);
	},

	load:function(str){
        str=parseInt(str);
		if(str&1) {this.prefs.short=1;} else {this.prefs.short=0;};
		LocalizeUpgradesAndAchievs();
		Game.RefreshStore();
		Game.upgradesToRebuild=1;
	},
});
