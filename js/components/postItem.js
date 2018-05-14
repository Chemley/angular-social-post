"use strict";

{

    const postItem = {
        bindings: {
            post: "<",
            onDelete: "&"   
        },

        template: `
           
            <section>
                <h3>{{ $ctrl.post.title }}</h3>
                <p>{{ $ctrl.post.body }}</p>
        
                <button type="button" ng-click="$ctrl.onDelete();">X</button>
            </section>
        
        `
    };

    angular
    .module("thoughts-app")
    .component("postItem", postItem);
}