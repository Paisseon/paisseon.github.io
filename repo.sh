rm -rf Packages Packages.bz2 Packages.gz Packages.zst Release
dpkg-scanpackages -m debs > Packages
bzip2 -k Packages
gzip -k Packages
zstd -19 Packages
cp Base Release
packages_size=$(ls -l Packages | awk '{print $5,$9}')
packages_md5=$(md5 -r Packages | awk '{print $1}')
packages_sha256=$(sha256sum Packages | awk '{print $1}')
packagesbz2_size=$(ls -l Packages.bz2 | awk '{print $5,$9}')
packagesbz2_md5=$(md5 -r Packages.bz2 | awk '{print $1}')
packagesbz2_sha256=$(sha256sum Packages.bz2 | awk '{print $1}')
packagesgz_size=$(ls -l Packages.gz | awk '{print $5,$9}')
packagesgz_md5=$(md5 -r Packages.gz | awk '{print $1}')
packagesgz_sha256=$(sha256sum Packages.gz | awk '{print $1}')
packageszst_size=$(ls -l Packages.zst | awk '{print $5,$9}')
packageszst_md5=$(md5 -r Packages.zst | awk '{print $1}')
packageszst_sha256=$(sha256sum Packages.zst | awk '{print $1}')
echo "MD5Sum:" >> Release
echo " $packages_md5 $packages_size" >> Release
echo " $packagesbz2_md5 $packagesbz2_size" >> Release
echo " $packagesgz_md5 $packagesgz_size" >> Release
echo " $packageszst_md5 $packageszst_size" >> Release
echo "SHA256:" >> Release
echo " $packages_sha256 $packages_size" >> Release
echo " $packagesbz2_sha256 $packagesbz2_size" >> Release
echo " $packagesgz_sha256 $packagesgz_size" >> Release
echo " $packageszst_sha256 $packageszst_size" >> Release
echo "Done"
