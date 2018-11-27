/***************************************************************************
 *
 * Copyright (c) 2018 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/

/**
 * @file Example.js
 * @extend bun.$_appname
 * vue应用 demo
 */

class Example extends bun.$_appname {
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