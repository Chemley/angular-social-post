//TODO: Set up bindings and controllers

"use strict";
{

    const postForm = {
        // "&" creates binding between components for functions
        bindings: {
            addThought: "&"

        },

        template: `
            <form ng-submit="$ctrl.addThought({stuff: $ctrl.thoughts});">
                <h2>Title</h2> 
                <input expand-on-focus placeholder ="Post Title" name="title" ng-model="$ctrl.thoughts.title">

                <h2>Thought</h2>
                <textarea expand-on-focus placeholder="Type thought here" name="body" ng-model="$ctrl.thoughts.body"></textarea>
                
                <button type="submit">Add Post</button>
            </form>
        `,

        controller: function() {
            const vm = this;
            vm.thoughts = {
                title: "",
                body: ""
            }
        }

    };


    angular
    .module("thoughts-app")
    .component("postForm", postForm);
}