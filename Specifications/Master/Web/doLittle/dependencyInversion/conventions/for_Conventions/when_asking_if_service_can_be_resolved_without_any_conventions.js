/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import Context from "./given/no_conventions";
import {Conventions} from "doLittle/dependencyInversion/conventions/Conventions";

describe("when asking if service can be resolved without any conventions", () => {
    let context = null;
    let result = null;

    beforeEach(() => {
        context = new Context();
        result = context.conventions.canResolve({}, "something");
    });

    it("should not be able to resolve", () => result.should.be.false);
});