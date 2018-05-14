// top level. Pulls in both the form and the post

"use strict";
{
    const socialPost = {

        template: `
        <section>
            <h1>My Thoughts</h1>
            <button ng-click="$ctrl.switchScreens();" type="button">New Thought</button>
        </section>

        <post-item ng-repeat="post in $ctrl.thought track by $index" post="post" index="$index" on-delete="$ctrl.onDelete(post);"></post-item>
        <post-form ng-show="$ctrl.showForm === true;" add-thought="$ctrl.addThought(stuff);"></post-form>
        `,

        controller: function() {
            const vm = this;
            vm.showForm = false;

            vm.addThought = function(newPost) {
                console.log(newPost);
                vm.thought.push({
                    title: newPost.title,
                    body: newPost.body
                });
                vm.showForm = false;
            }

            vm.onDelete = (post) => {
                vm.thought.splice(post, 1);
            }

            vm.switchScreens = () => {
                vm.showForm = true;
                console.log(vm.showForm);
            }

            vm.thought = [
                {
                    title: "Dog",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque nisi at nibh malesuada, pulvinar accumsan ex tincidunt. Curabitur rutrum tincidunt turpis, ut feugiat enim bibendum a. Nam aliquet convallis iaculis. Sed nec tincidunt nibh. Suspendisse vulputate malesuada varius. Duis ullamcorper blandit pulvinar. Pellentesque molestie nunc non enim faucibus pretium. Duis lobortis placerat mattis. Pellentesque pellentesque velit elit, eu mollis justo facilisis vel. Sed eu arcu ac sapien vulputate aliquet sit amet eu elit. Praesent rhoncus nisl posuere, luctus orci quis, rutrum libero. Pellentesque gravida aliquet est sit amet gravida."
                },
                {
                    title: "Mouse",
                    body: "Fusce a pharetra orci, at gravida ante. Donec luctus augue enim, et luctus leo aliquam vitae. Quisque auctor imperdiet sapien id varius. Aliquam porttitor nisi et euismod consequat. Aliquam eu leo accumsan, sollicitudin ipsum vel, placerat orci. In in eleifend nibh, id dapibus libero. Morbi sit amet aliquam turpis, eu volutpat augue. Quisque in urna porttitor, molestie turpis ac, bibendum leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam aliquam libero non lacus malesuada, et eleifend diam euismod. Pellentesque est justo, euismod porta lobortis ut, ullamcorper sit amet lectus."
                },
                {
                    title: "Elephant",
                    body: "Suspendisse blandit commodo arcu faucibus dictum. Nulla tincidunt ullamcorper quam, at efficitur quam luctus quis. In eleifend vehicula nulla, id gravida quam viverra et. Morbi vehicula porttitor nulla in consequat. Morbi ante leo, posuere eu convallis eu, aliquet eget turpis. Donec ac erat lacinia velit congue rhoncus. Donec ante metus, tristique vestibulum purus ut, facilisis euismod felis. Praesent dictum, sem quis hendrerit consectetur, est justo tincidunt erat, et tempor orci nunc sed libero."
                }

            ];
        } 


    }


    angular
    .module("thoughts-app")
    .component("socialPost", socialPost);
}