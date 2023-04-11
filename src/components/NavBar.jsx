
export default function NavBar() {
    return(
<ul class="flex bg-black" style={{position: 'sticky'}}>
  <li class="mr-3">
    <a class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="#">Active Pill</a>
  </li>
  <li class="mr-3">
    <a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="#">Pill</a>
  </li>
  <li class="mr-3">
    <a class="inline-block py-1 px-3 text-white" href="#">Disabled Pill</a>
  </li>
</ul>
    )
}