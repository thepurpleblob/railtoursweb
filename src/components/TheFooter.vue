<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
    <footer class="footer bg-[#6b0319] text-white py-6 px-2">

        <nav>
            <h6 class="footer-title">About</h6>
            <div>
                <p class="font-bold mb-2">
                    The Scottish Railway Preservation Society - Railtours
                </p>
            </div>
            <div>
                <div class="flex items-center mb-1">
                    <font-awesome-icon class="mr-1" icon="fa-solid fa-square-phone" size="2x" fixed-width />
                    0131 202 1033
                </div>
                <div class="flex items-center">
                    <font-awesome-icon class="mr-1" icon="fa-solid fa-square-envelope" size="2x" fixed-width/>
                    railtours@srps.org.uk
                </div>
            </div>
        </nav>

        <nav>
            <h6 class="footer-title">Other SRPS websites</h6>
            <ul class="list-none">
                <li><a class="underline" href="https://www.srps.org.uk">The Scottish Railway Preservation Society</a></li>
                <li><a class="underline" href="https://www.bkrailway.co.uk">Bo'ness & Kinneil Railway</a></li>
                <li><a class="underline" href="https://www.museumofscottishrailways.org.uk">Museum of Scottish Railways</a></li>
                <li><a class="underline" href="https://www.srpsdiesel.co.uk">SRPS Diesel Group</a></li>
                <li><a class="underline" href="https://www.srpssteam.com/">SRPS Steam Group</a></li>
                <li><a class="underline" href="https://www.gotopcs.net/">SRPS Carriage &amp; Wagon Dept.</a></li>
                <li><a class="underline" href="https://www.srpsbirkhillgroup.org.uk/">SRPS Birkhill Station Development</a></li>
            </ul>
        </nav>

        <nav>
            <h6 class="footer-title">Socials</h6>
            <div class="grid grid-flow-col gap-4">
                <a href="https://www.facebook.com/p/Scottish-Railway-Preservation-Society-61560563783923/">
                    <font-awesome-icon class="mr-2" icon="fa-brands fa-square-facebook" size="3x"/>
                </a>
                <a href="https://www.instagram.com/bonesskinneilrailway">
                    <font-awesome-icon class="mr-2" icon="fa-brands fa-square-x-twitter" size="3x"/>
                </a>
                <a href="https://www.instagram.com/bonesskinneilrailway">
                    <font-awesome-icon icon="fa-brands fa-square-instagram" size="3x"/>
                </a>
            </div>
        </nav>

    </footer>
</template>