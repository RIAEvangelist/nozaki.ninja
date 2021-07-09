import express from 'express';
import {color,background,style,resetAllColors} from 'nozaki-colors';
const app = express();
const port = 80;



// Setting up the public directory
app.use(express.static('./node_modules/nozaki-components/'));

app.listen(
    port, 
    () => {
        console.log(
            `${background.black}
        
            ${color.yellow}::::    :::  :::::::: :::::::::     :::     :::    ::: ::::::::::: 
            ${color.lightYellow}:+:+:   :+: :+:    :+:     :+:    :+: :+:   :+:   :+:      :+:     
            ${color.lightGreen}:+:+:+  +:+ +:+    +:+    +:+    +:+   +:+  +:+  +:+       +:+     
            ${color.green}+#+ +:+ +#+ +#+    +:+   +#+    +#++:++#++: +#++:++        +#+     
            ${color.blue}+#+  +#+#+# +#+    +#+  +#+     +#+     +#+ +#+  +#+       +#+     
            ${color.lightBlue}#+#   #+#+# #+#    #+# #+#      #+#     #+# #+#   #+#      #+#     
            ${color.lightMagenta}###    ####  ######## ######### ###     ### ###    ### ###########
        
            ${resetAllColors}`
        )
    }
);