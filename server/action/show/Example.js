/***************************************************************************
 *
 * Copyright (c) 2018 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/

/**
 * @file Index.js
 * @extend bun.vueapp
 * react应用ssr demo
 */

class Example extends bun.vueapp {
    constructor() {
        super();
        this.a = 1;
        
    }
    async execute(ctx) {
        await ctx.render('example',{
            message: 'Bunjs is ready!!',
            state: JSON.stringify({})
        });
    }
}

module.exports = Example;