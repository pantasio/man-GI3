var a=this,b=function(f,k){f=f.split(".");var e=a;f[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]&&e[g]!==Object.prototype[g]?e[g]:e[g]={}:e[g]=k};var c={c:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},b:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},d=c;d=c;var h={fa:"y",ma:"y G",ga:"MMM y",ha:"MMMM y",na:"MM/y",F:"MMM d",G:"MMMM dd",I:"M/d",H:"MMMM d",ka:"MMM d, y",da:"EEE, MMM d",la:"EEE, MMM d, y",i:"d"},l=h;l=h;var m={s:["BC","AD"],o:["Before Christ","Anno Domini"],K:"JFMAMJJASOND".split(""),X:"JFMAMJJASOND".split(""),D:"January February March April May June July August September October November December".split(" "),W:"January February March April May June July August September October November December".split(" "),T:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Z:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ca:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
aa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),V:"Sun Mon Tue Wed Thu Fri Sat".split(" "),$:"Sun Mon Tue Wed Thu Fri Sat".split(" "),L:"SMTWTFS".split(""),Y:"SMTWTFS".split(""),U:["Q1","Q2","Q3","Q4"],R:["1st quarter","2nd quarter","3rd quarter","4th quarter"],a:["AM","PM"],g:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ba:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],h:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],v:6,ea:[5,6],w:5},n=m;n=m;var p={l:".",A:",",M:"%",ja:"0",P:"+",C:"-",u:"E",O:"\u2030",B:"\u221e",J:"NaN",j:"#,##0.###",S:"#E0",N:"#,##0%",f:"\u00a4#,##0.00",m:"USD"},q=p;q=p;b("I18N_DATETIMESYMBOLS_ERAS",n.s);b("I18N_DATETIMESYMBOLS_ERANAMES",n.o);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",n.K);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",n.X);b("I18N_DATETIMESYMBOLS_MONTHS",n.D);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",n.W);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",n.T);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",n.Z);b("I18N_DATETIMESYMBOLS_WEEKDAYS",n.ca);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",n.aa);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",n.V);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",n.$);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",n.L);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",n.Y);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",n.U);b("I18N_DATETIMESYMBOLS_QUARTERS",n.R);b("I18N_DATETIMESYMBOLS_AMPMS",n.a);b("I18N_DATETIMESYMBOLS_DATEFORMATS",n.g);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",n.ba);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",n.h);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",n.v);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",n.ea);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",n.w);b("I18N_DATETIMEPATTERNS_YEAR_FULL",l.fa);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",l.ga);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",l.ha);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",l.F);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",l.G);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",l.I);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",l.H);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",l.da);b("I18N_DATETIMEPATTERNS_DAY_ABBR",l.i);
void 0!==n.ia&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",n.ia);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",q.l);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",q.A);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",q.M);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",q.ja);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",q.P);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",q.C);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",q.u);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",q.O);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",q.B);b("I18N_NUMBERFORMATSYMBOLS_NAN",q.J);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",q.j);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",q.S);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",q.N);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",q.f);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",q.m);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",d.c);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",d.b);
