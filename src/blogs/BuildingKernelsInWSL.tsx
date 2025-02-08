const BuildingKernelsInWSL = () => {
  return (
    <>
      <h1>Building Kernels in WSL</h1>
      <p>
        I have always wanted to build the Linux kernel myself, and a good
        starting point always seemed to be the Android Kernel. It&#39;s much
        easier to test out and you can&#39;t really mess all that much up on
        your phone (also if you do, it&#39;s easier to fix your phone with a
        working computer than fixing your computer with another one available).
      </p>
      <h2 id="-wsl-bash-now-on-windows-">
        <strong>WSL - Bash, now on Windows</strong>
      </h2>
      <p>
        Now, I am a Windows user. Yes, I know that&#39;s not a very common OS to
        use for most developers, but it is what it is. I get to use a lot of
        software that I need for my music stuff without having to switch back to
        Windows from a Linux distro. Luckily, Microsoft has been working on
        something called
        <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">
          Windows Subsystem for Linux (WSL)
        </a>
        for quite some time now, and I think it really has matured into
        something that can be used for almost all of my daily tasks.
      </p>
      <p>
        I won&#39;t go into too much detail about what WSL is in this post, but
        in short, it is Linux running inside Windows. But, unlike a VM, the
        resource sharing and allocation is much better. Windows dynamically
        manages resources between WSL and itself, thus giving amazing
        performance even for intensive workloads.
      </p>
      <p>
        If you want to build a kernel using WSL too, you are going to want to
        use WSL2 specifically. WSL2 has a proper Linux Kernel running inside
        Windows, thus allowing you to actually successfully build Linux.
      </p>
      <h2 id="building-a-kernel">Building a Kernel</h2>
      <p>
        Now this isn&#39;t my first time trying to build a kernel. I did attempt
        this back in 2018, but I wasn&#39;t as experienced with development and
        working around with already existing codebases. So, two years later, I
        decided to give it another shot.
      </p>
      <p>
        I have a OnePlus 5 as my daily driver. It&#39;s got great community
        support for custom ROMs and Kernels so it was the perfect phone to start
        building kernels for. So I began by downloading the source code. I began
        with OnePlus&#39; OxygenOS kernel sources for my device, the
        <code>msm-8998</code>.
      </p>
      <p>
        A fun tip that I helps with the huge Git repo sizes: Shallow clone the
        repos. Since I was just building for the first time, I didn&#39;t really
        need all of the commit history. Of course, as a proper kernel dev /
        maintainer you&#39;d probably want to clone it the normal way.
      </p>
      <p>
        The first guide that I stumbled upon was pretty old. But I figured that
        it should still work. I downloaded a <code>gcc</code> toolchain and
        began building the source without any modifications at first. It
        wasn&#39;t a surprise when I ran into what I would say were a bajellion
        different problems.
      </p>
      <p>
        The OxygenOS sources didn&#39;t seem to have a <code>defconfig</code>{" "}
        file needed to build the kernel and my gcc toolchain wouldn&#39;t work
        either.
      </p>
      <h2 id="clang-and-paranoid-android">Clang and Paranoid Android</h2>
      <p>
        On looking up for updated guides, I found Nathan Chance&#39;s
        <a href="https://github.com/nathanchance/android-kernel-clang">
          Compiling an Android kernel with Clang
        </a>
        . I think it is the best guide on how to build kernels for Android. I
        also learnt that Google now builds the Android kernel with Clang and
        that gcc is deprecated. I used
        <a href="https://github.com/kdrag0n/proton-clang.git">proton-clang</a>.
        It&#39;s a good set of prebuilt binaries needed for building the kernel.
      </p>
      <p>
        Also, since the OxygenOS sources seemed to have problems, I switched
        over to <a href="https://aospa.co">Paranoid Android</a>&#39;s sources
        for my device. These were updated quite recently, so I was positive that
        they would work.
      </p>
      <h2 id="don-t-panic">Don&#39;t Panic</h2>
      <p>
        Okay, so all seems good to go! I followed Nathan&#39;s build
        instructions and wrote a small build script for this. And now comes the
        interesting part. I wasn&#39;t sure about how building on WSL would
        affect my build duration. And to my surprise, the resource management
        was insane! I have a laptop with an i7 8550U and 16 GB RAM. WSL was able
        to make use of all those resources and was running at full power!
      </p>
      <p>
        <img src="/building-kernels-in-wsl/htop.png" alt="htop" />
      </p>
      <p>
        With this I got my first successful build done in just under 12 minutes.
        Now I haven&#39;t really built kernels before, but I think it&#39;s
        pretty a reasonable time. And throughout the build duration, Windows
        itself was working fine and didn&#39;t seem to hang at all (I wasn&#39;t
        running a lot of Windows specific software but still).
      </p>
      <p>
        <img src="/building-kernels-in-wsl/aospa.png" alt="11:59" />
      </p>
      <h2 id="packaging-and-flashing">Packaging and Flashing</h2>
      <p>
        AnyKernel3 is basically the standard for making flashable kernel zips,
        and it&#39;s pretty easy to use as well.
      </p>
      <ol>
        <li>Just download the zip and unzip it.</li>
        <li>
          Copy your from Image.gz-dtb file (from
          <code>/out/arch/arm64/boot/Image.gz-dtb</code>) to the extracted
          folder.
        </li>
        <li>
          Edit you the flash script to mention your device&#39;s name and
          codename so that you don&#39;t run into compatibility errors while
          flashing
        </li>
        <li>
          <code>zip -r9 AnyKernel3.zip * -x .git</code>
        </li>
        <li>Flash away!</li>
      </ol>
      <p>
        So, you do need a device with an unlocked bootloader and a custom
        recovery like TWRP. My kernel flashed and booted up without any errors,
        and it seemed a little smoother too!
      </p>
      <p>
        I did notice that the default governor was set to
        <code>performance</code> and changed it to <code>schedutil</code>. Also,
        since I was not running AOSPA&#39;s kernel on OxygenOS, I noticed that
        the offscreen gestures weren&#39;t working. After spending a lot of time
        on trying to understand what was wrong, I finally found out that the
        file
        <code>drivers/input/touchscreen/synaptics_driver_s3320.c</code> had all
        the gesture definitions. These were slightly different from the ones in
        OxygenOS sources. So I just copied those from OxygenOS to AOSPA and
        after a quick rebuild, I had working off screen gestures.
      </p>
      <p>
        If time permits, I&#39;ll try understanding a little more about how to
        go about working with kernel sources. But that&#39;s all for now!
      </p>
    </>
  );
};

export default BuildingKernelsInWSL;
